# Development Log

## Workout detail page

### 初期実装
- sampleWorkouts 配列から `find()` で取得
- `params.id` を `Number(id)` に変換していた

### DB実装後
- Prisma の `workoutLog.findUnique()` でRDSから取得
- DBのidはstringなので `Number(id)` は不要
- 見つからない場合は `notFound()` を使う

```
// type WorkoutDetailPageProps = {
//     params: Promise<{
//         id: string
//     }>
// }


// export default async function WorkoutDetailPage({ params }: WorkoutDetailPageProps) {
//     const { id } = await params

//     return (
//         <main className="min-h-screen p-8">
//             <h1>Workout Detail</h1>
//             <p>ID: {id}</p>
//         </main>
//     )
// }

// const workoutDetail = sampleWorkouts.find((workout) => workout.id === workoutID)
/*
type WorkoutDetail = {
    id: number
    name: string
    weight: string
    sets: number
    reps: number
    date: string
    volume: string
    tag: string
    memo: string
}

const sampleWorkouts: WorkoutDetail[] = [
  {
    id: 1,
    name: "Bench Press",
    weight: "185 lbs",
    sets: 4,
    reps: 8,
    date: "Mar 18, 2025",
    volume: "5,920 lbs",
    tag: "Chest",
    memo: "great"
  },
  {
    id: 2,
    name: "Deadlift",
    weight: "315 lbs",
    sets: 3,
    reps: 5,
    date: "Mar 17, 2025",
    volume: "4,725 lbs",
    tag: "Back",
    memo: "amazing"
  },
]

type WorkoutDetailPageProps = {
    params: Promise<{
        id: string
    }>
}

export default async function WorkoutDetailPage({
    params,
}: WorkoutDetailPageProps) {
    const { id } = await params

    const workoutId = Number(id)

    const workoutDetail = sampleWorkouts.find((workout) => {
        return workout.id === workoutId
    })

    if (!workoutDetail) {
        return(
            <main className="min-h-screen p-8">
                <h1>Workout Not Found</h1>
                <p>ID: {id}</p>
            </main>
        )
    }

    return (
        <main className="min-h-screed p-8">
            <h1>{workoutDetail.name}</h1>
            <p>Weight: {workoutDetail.weight}</p>
            <p>Sets/Reps: {workoutDetail.sets}×{workoutDetail.reps}</p>
            <p>Volume: {workoutDetail.volume}</p>
            <p>Tag: {workoutDetail.tag}</p>
            <p>Date: {workoutDetail.date}</p>
        </main>
    )
}*/

import Link from "next/link"
import { ArrowLeft, Pencil, Dumbbell } from "lucide-react"
import { notFound } from "next/navigation"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { prisma } from "@/lib/prisma"
import { DeleteWorkoutButton } from "@/components/delete-workout-button"
import { Value } from "@radix-ui/react-select"

// type WorkoutDetail = {
//   id: number
//   name: string
//   weight: string
//   sets: number
//   reps: number
//   date: string
//   volume: string
//   tag: string
//   memo: string
// }

// const sampleWorkouts: WorkoutDetail[] = [
//   {
//     id: 1,
//     name: "Bench Press",
//     weight: "185 lbs",
//     sets: 4,
//     reps: 8,
//     date: "Mar 18, 2025",
//     volume: "5,920 lbs",
//     tag: "Chest",
//     memo: "great",
//   },
//   {
//     id: 2,
//     name: "Deadlift",
//     weight: "315 lbs",
//     sets: 3,
//     reps: 5,
//     date: "Mar 17, 2025",
//     volume: "4,725 lbs",
//     tag: "Back",
//     memo: "amazing",
//   },
// ]
```
こんな感じ
