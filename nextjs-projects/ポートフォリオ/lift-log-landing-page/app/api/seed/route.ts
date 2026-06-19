import { prisma } from "@/lib/prisma"
import { NextResponse } from "next/server"

// 開発用: テストデータ作成API
// 本番公開前に削除する
export async function GET() {
  try {
    const user = await prisma.user.upsert({
      where: {
        email: "test@example.com",
      },
      update: {},
      create: {
        email: "test@example.com",
        passwordHash: "dummy-password-hash",
        username: "test_user",
        gender: "male",
        age: 27,
        height: 168,
        bodyWeight: 62,
      },
    })

    const benchPress = await prisma.workoutLog.upsert({
      where: {
        id: "test-workout-1",
      },
      update: {},
      create: {
        id: "test-workout-1",
        userId: user.id,
        exerciseName: "Bench Press",
        weight: 67.5,
        reps: 5,
        sets: 4,
        rest: 180,
        tag: "Chest",
        memo: "RDS接続テスト",
      },
    })

    const latPulldown = await prisma.workoutLog.upsert({
      where: {
        id: "test-workout-2",
      },
      update: {},
      create: {
        id: "test-workout-2",
        userId: user.id,
        exerciseName: "Lat Pulldown",
        weight: 60,
        reps: 8,
        sets: 4,
        rest: 120,
        tag: "Back",
        memo: "背中の日テストデータ",
      },
    })

    return NextResponse.json({
      message: "Seed data created",
      user,
      workouts: [benchPress, latPulldown],
    })
  } catch (error) {
    console.error(error)

    return NextResponse.json(
      {
        message: "Failed to create seed data",
        error: String(error),
      },
      { status: 500 }
    )
  }
}