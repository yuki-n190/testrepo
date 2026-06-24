import { NextResponse } from "next/server"
import { prisma } from "@/lib/prisma"
import { Weight } from "lucide-react"
import { set } from "date-fns"

export const dynamic = "force-dynamic"

type Params = {
  params: Promise<{
    id: string
  }>
}

export async function DELETE(
  request: Request,
  { params }: Params
) {
  try {
    const { id } = await params

    await prisma.workoutLog.delete({
      where: {
        id,
      },
    })

    return NextResponse.json({
      message: "Workout deleted.",
    })
  } catch (error) {
    console.error(error)

    return NextResponse.json(
      {
        message: "Failed to delete workout.",
        error: String(error),
      },
      { status: 500 }
    )
  }
}

export async function PATCH(
  request: Request,
  { params }: Params
) {
  try {
    const { id } = await params
    const body = await request.json()

    const { exerciseName, weight, reps, sets, rest, tag, memo } = body
    
    if ( !exerciseName || !Weight || !reps || !sets ) {
      return NextResponse.json(
        { message: "Required fields are missing." },
        { status: 400 }
      )
    }

    const workout = await prisma.workoutLog.update({
      where: {
        id,
      },
      data: {
        exerciseName,
        weight: Number(weight),
        reps: Number(reps),
        sets: Number(sets),
        rest: rest ? Number(rest) : null,
        tag: tag || null,
        memo: memo || null,
      },
    })

    return NextResponse.json({
      message: "Workout updated.",
      workout,
    })
  } catch (error) {
    console.error(error)

    return NextResponse.json(
      {
        message: "Failed to update workout.",
        error: String(error),
      },
      { status: 500 }
    )
  }
}