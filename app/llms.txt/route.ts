import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function GET() {
    try {
        const filePath = path.join(process.cwd(), 'public', 'llms.txt.bak');
        const fileContent = fs.readFileSync(filePath, 'utf8');

        return new NextResponse(fileContent, {
            headers: {
                'Content-Type': 'text/plain; charset=utf-8',
                'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=59',
            },
        });
    } catch (error) {
        console.error('Error serving llms.txt:', error);
        return new NextResponse('Error loading llms.txt', { status: 500 });
    }
}
