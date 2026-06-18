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
import { ArrowLeft, Pencil, Trash2, Dumbbell } from "lucide-react"
import { notFound } from "next/navigation"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { prisma } from "@/lib/prisma"
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

type WorkoutDetailPageProps = {
  params: Promise<{
    id: string
  }>
}

export default async function WorkoutDetailPage({ params }: WorkoutDetailPageProps) {
  const { id } = await params

  const workout = await prisma.workoutLog.findUnique({
    where: {
      id,
    },
  })

  if (!workout) {
    notFound()
  }

  const volume = workout.weight * workout.sets * workout.reps

  // Sticky header reused across both states for consistency
  const header = (
    <header className="sticky top-0 z-50 bg-background/90 backdrop-blur-sm border-b border-border">
      <nav className="mx-auto flex h-16 max-w-3xl items-center justify-between px-6">
        <Link href="/" className="font-display text-xl tracking-wider">
          LIFTLOG
        </Link>
        <Link
          href="/workouts"
          className="flex items-center gap-2 text-xs uppercase tracking-widest text-muted-foreground hover:text-foreground transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          My Workouts
        </Link>
      </nav>
    </header>
  )

  const stats = [
    { label: "Weight", value: `${workout.weight}kg` },
    { label: "Sets", value: workout.sets },
    { label: "Reps", value: workout.reps },
    { label: "Total Volume", value: `${volume}kg` }
  ]

  return (
    <main className="min-h-screen pb-24">
      {header}

      <div className="mx-auto max-w-3xl px-6 pt-12">
        {/* Title block */}
        <section className="mb-10">
          <div className="flex items-center gap-3 mb-3">
            {workout.tag && (
              <Badge
                variant="secondary"
                className="uppercase tracking-widest text-[10px]"
              >
                {workout.tag}
              </Badge>
            )}

            <span className="text-xs uppercase tracking-widest text-muted-foreground">
              {workout.createdAt.toLocaleDateString("ja-JP")}
            </span>
          </div>

          <h1 className="font-display text-5xl md:text-7xl tracking-tight">
            {workout.exerciseName}
          </h1>
        </section>

        {/* Main stats */}
        <section className="grid grid-cols-2 gap-px bg-border border border-border mb-10">
          {stats.map((stat) => (
            <div key={stat.label} className="bg-card p-6">
              <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-3">
                {stat.label}
              </p>

              <p className="font-display text-4xl md:text-5xl tracking-tight">
                {stat.value}
              </p>
            </div>
          ))}
        </section>

        {/* Memo / Notes */}
        <section className="mb-10">
          <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-3">
            Notes
          </p>

          <div className="bg-card border border-border p-6">
            <p className="text-lg leading-relaxed text-foreground">
              {workout.memo || "No memo added."}
            </p>
          </div>
        </section>

        {/* Actions - UI only for now */}
        <section className="flex flex-col sm:flex-row gap-4">
          <Button className="h-14 flex-1 text-xs uppercase tracking-widest gap-2">
            <Pencil className="h-4 w-4" />
            Edit Workout
          </Button>

          <Button
            variant="outline"
            className="h-14 flex-1 text-xs uppercase tracking-widest gap-2 border-border text-muted-foreground hover:text-foreground bg-transparent"
          >
            <Trash2 className="h-4 w-4" />
            Delete
          </Button>
        </section>
      </div>
    </main>
  )
}