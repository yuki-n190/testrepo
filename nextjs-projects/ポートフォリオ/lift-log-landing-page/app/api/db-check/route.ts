import { prisma } from "@/lib/prisma"
import { NextResponse } from "next/server"

// 開発用: DB接続確認API
// 本番公開前に削除する
export async function GET() {
  try {
    const dbInfo = await prisma.$queryRaw<
      {
        current_user: string
        current_database: string
        current_schema: string
      }[]
    >`
      SELECT
        current_user,
        current_database(),
        current_schema()
    `

    const tables = await prisma.$queryRaw<
      {
        table_schema: string
        table_name: string
        table_type: string
      }[]
    >`
      SELECT
        table_schema,
        table_name,
        table_type
      FROM information_schema.tables
      WHERE table_schema = 'public'
      ORDER BY table_name
    `

    return NextResponse.json({
      message: "DB check succeeded",
      dbInfo,
      tables,
    })
  } catch (error) {
    console.error(error)

    return NextResponse.json(
      {
        message: "DB check failed",
        error: String(error),
      },
      { status: 500 }
    )
  }
}