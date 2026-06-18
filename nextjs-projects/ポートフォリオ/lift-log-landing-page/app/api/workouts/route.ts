import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { set } from "date-fns";

export async function POST(request: Request) {
    try {
        const body = await request.json()

        const { exerciseName, weight, reps, sets, rest, tag, memo } = body

        if (!exerciseName || !weight || !reps || !sets) {
            return NextResponse.json(
                { message: "Required fields are missing." },
                { status: 400 }
            )
        }

        const user = await prisma.user.findUnique({
            where: {
                email: "test@example.com",
            },
        })

        if (!user) {
            return NextResponse.json(
                { message: "Test user not found. Run /api/seed first." },
                { status: 404 }
            )
        }

        const workout = await prisma.workoutLog.create({
            data: {
                userId: user.id,
                exerciseName,
                weight: Number(weight),
                reps: Number(reps),
                sets: Number(sets),
                rest: rest ? Number(rest) : null,
                tag: tag || null,
                memo: memo || null,
            },
        })

        return NextResponse.json(
            {
                message: "Workout created.",
                workout,
            },
            { status: 201 }
        )
    } catch (error) {
        console.error(error)

        return NextResponse.json(
            {
                message: "Failed to create workout.",
                error: String(error),
            },
            { status: 500 }
        )
    }
}