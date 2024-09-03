import { NextResponse } from "next/server";
import { prisma } from "../../../../prisma/prisma-client";

export async function GET() {
    const users = await prisma.user.findMany(); // get all users from the database
    return NextResponse.json(users) // use NextResponse.json() to return JSON response because next.js do not understand JSON.stringify 
}