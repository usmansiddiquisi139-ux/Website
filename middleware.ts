import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const GA4_MEASUREMENT_ID = 'G-SJKVRVEX75';
const GA4_API_SECRET = 'WvVVR9YSTcyLmu1CAJKpRw';

/**
 * AI Bot Detection & GA4 Analytics Middleware
 */
export async function middleware(request: NextRequest) {
    const userAgent = request.headers.get('user-agent') || '';
    const path = request.nextUrl.pathname;

    const aiBots = [
        'GPTBot',
        'ChatGPT-User',
        'PerplexityBot',
        'ClaudeBot',
        'Claude-Web',
        'Google-InspectionTool',
        'OAI-SearchBot',
        'Bingbot',
        'CCBot',
    ];

    const isAIBot = aiBots.some(bot => userAgent.includes(bot));

    if (isAIBot) {
        console.log(`[AI_BOT_DETECTED] Bot: ${userAgent} | Path: ${path}`);

        // Server-side GA4 Tracking (Measurement Protocol)
        try {
            const botName = aiBots.find(bot => userAgent.includes(bot)) || 'Unknown AI';

            // We use a dummy client_id for bots (non-stored cookie-less tracking)
            const clientId = `bot_${botName.replace(/\s+/g, '_')}`;

            fetch(`https://www.google-analytics.com/mp/collect?measurement_id=${GA4_MEASUREMENT_ID}&api_secret=${GA4_API_SECRET}`, {
                method: 'POST',
                body: JSON.stringify({
                    client_id: clientId,
                    events: [{
                        name: 'ai_bot_visit',
                        params: {
                            bot_name: botName,
                            page_location: request.url,
                            page_path: path,
                            user_agent: userAgent,
                            source: 'ai_crawler',
                            medium: 'automated'
                        }
                    }]
                })
            }).catch(err => console.error('[GA4_ERROR] Bot tracking failed:', err));

        } catch (e) {
            console.error('[GA4_ERROR] Failed to send bot event:', e);
        }

        const response = NextResponse.next();
        response.headers.set('X-AI-Optimized', 'true');
        return response;
    }

    return NextResponse.next();
}

export const config = {
    matcher: [
        '/llms.txt',
        '/ai.txt',
        '/',
        '/services/:path*',
        '/about',
        '/portfolio',
    ],
};
