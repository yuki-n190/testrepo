import { NextResponse } from "next/server"
import { prisma } from "@/lib/prisma"

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