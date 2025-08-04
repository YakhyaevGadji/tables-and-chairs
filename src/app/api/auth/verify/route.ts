import { NextRequest, NextResponse } from "next/server";


export async function GET(req: NextRequest) {
    try {
        const code = req.nextUrl.searchParams.get('code')

        if (!code) {
            return NextResponse.json({ error: 'Неверный код' }, { status: 400 });
        }

        //если код есть тогда 




        return NextResponse.redirect(new URL('/?verified', req.url))
    }

    catch (error) {
        console.log(error);

    }
}