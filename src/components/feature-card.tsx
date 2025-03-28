import { CheckCircle } from "lucide-react"

interface FeatureCardProps {
  title: string
  points: string[]
}

export function FeatureCard({ title, points }: FeatureCardProps) {
  return (
    <div className="rounded-lg border bg-card p-6 shadow-sm">
      <h3 className="mb-4 text-xl font-bold">{title}</h3>
      <ul className="space-y-2">
        {points.map((point, index) => (
          <li key={index} className="flex items-start">
            <CheckCircle className="mr-2 h-5 w-5 shrink-0 text-burgundy dark:text-yellow-400" />
            <span>{point}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

