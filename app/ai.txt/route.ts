import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function GET() {
    try {
        const filePath = path.join(process.cwd(), 'public', 'ai.txt.bak');
        const fileContent = fs.readFileSync(filePath, 'utf8');

        return new NextResponse(fileContent, {
            headers: {
                'Content-Type': 'text/plain; charset=utf-8',
                'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=59',
            },
        });
    } catch (error) {
        console.error('Error serving ai.txt:', error);
        return new NextResponse('Error loading ai.txt', { status: 500 });
    }
}
