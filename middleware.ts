import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

/**
 * AI Bot Detection & Analytics Middleware
 */
export function middleware(request: NextRequest) {
    const userAgent = request.headers.get('user-agent') || '';
    const path = request.nextUrl.pathname;

    // List of AI Crawler User-Agents
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

    // If it's an AI bot, we can perform special logging or tracking
    if (isAIBot) {
        console.log(`[AI_BOT_DETECTED] Bot: ${userAgent} | Path: ${path} | Time: ${new Date().toISOString()}`);

        /**
         * Future Integration: Google Analytics Measurement Protocol
         * We would send a POST request to GA4 here to log the server-side event.
         * req.body = { client_id: 'bot_id', events: [{ name: 'ai_bot_visit', params: { bot_name: userAgent, path } }] }
         */

        // Optionally add a header to indicate AI-optimized delivery
        const response = NextResponse.next();
        response.headers.set('X-AI-Optimized', 'true');
        return response;
    }

    return NextResponse.next();
}

// Only run middleware on paths that AI Bots are likely to visit
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
