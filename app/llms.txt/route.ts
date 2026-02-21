import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function GET() {
    const filePath = path.join(process.cwd(), 'public', 'llms.txt.bak');
    console.log('[DEBUG] Serving llms.txt from:', filePath);

    try {
        if (!fs.existsSync(filePath)) {
            console.error('[DEBUG] File NOT found at:', filePath);
            return new NextResponse('File not found in system', { status: 404 });
        }

        const fileContent = fs.readFileSync(filePath, 'utf8');

        return new NextResponse(fileContent, {
            headers: {
                'Content-Type': 'text/plain; charset=utf-8',
                'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=59',
            },
        });
    } catch (error: any) {
        console.error('[DEBUG] Error serving llms.txt:', error.message);
        return new NextResponse(`Error loading llms.txt: ${error.message}`, { status: 500 });
    }
}
