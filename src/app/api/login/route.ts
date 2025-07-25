import { NextRequest, NextResponse } from "next/server";
import  jwt  from "jsonwebtoken";
import bcrypt from "bcryptjs";
//mock data
import { users } from '@/lib/mock-data'
const SECRET = 'your-secret-key';

export async function POST(req: NextRequest) {

    const { username, password } = await req.json();

    const user = users.find((u) => u.username === username);

    if(
        !user || !bcrypt.compareSync(password, user.password)
    ) {
        return NextResponse.json({message: 'Invalid Credentials'}, {status: 401});
    }

    const token = jwt.sign({ username: user.username, role: user.role }, SECRET, {expiresIn: '1h'});

     return NextResponse.json( { token })
}