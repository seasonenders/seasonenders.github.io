import { DaysSince } from '@/app/components/dayssince'
import data from "@/data/providencePark.json"

export default function Home() {
  return (
    <main className="flex justify-center bg-slate-600 min-h-screen"> 
      <div className="pt-4">
      <DaysSince data={data} />
      </div>
    </main>
  );
}
