import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { NullTypes } from "@prisma/client/runtime/client";

export const dynamic = "force-dynamic"

export async function POST(request: Request) {
    try {
        const body = await request.json()

        const { exerciseName, weight, reps, sets, rest, tag, memo } = body

        // const weightNumber = Number(weight)
        // const repsNumber = Number(reps)
        // const setsNumber = Number(sets)
        // const restNumber = rest ? Number(rest): null
// 
        // if (
            // !exerciseName ||
            // weight === "" ||
            // reps === "" ||
            // sets === "" ||
            // !Number.isFinite(weightNumber) ||
            // !N
        // )

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

export async function GET() {
  try {
    const workouts = await prisma.workoutLog.findMany({
      orderBy: {
        createdAt: "desc",
      },
      take: 10,
    })

    return NextResponse.json({ workouts })
  } catch (error) {
    console.error(error)

    return NextResponse.json(
      {
        message: "Failed to fetch workouts.",
        error: String(error),
      },
      { status: 500 }
    )
  }
}