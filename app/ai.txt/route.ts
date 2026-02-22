import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';
import { AIGuardrails } from '@/lib/guardrails';

export async function GET() {
    const filePath = path.join(process.cwd(), 'public', 'ai.txt.bak');
    console.log('[DEBUG] Serving ai.txt from:', filePath);

    try {
        if (!fs.existsSync(filePath)) {
            console.error('[DEBUG] File NOT found at:', filePath);
            return new NextResponse('File not found in system', { status: 404 });
        }

        const fileContent = fs.readFileSync(filePath, 'utf8');

        // Pass through guardrails
        const { content } = await AIGuardrails.process(fileContent);

        return new NextResponse(content, {
            headers: {
                'Content-Type': 'text/plain; charset=utf-8',
                'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=59',
            },
        });
    } catch (error: any) {
        console.error('[DEBUG] Error serving ai.txt:', error.message);
        return new NextResponse(`Error loading ai.txt: ${error.message}`, { status: 500 });
    }
}
