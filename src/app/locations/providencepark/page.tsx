import { DaysSince } from '@/app/components/dayssince'
import { Injuries } from '@/app/components/injuries'
import data from "@/data/providencePark.json"

export default function Home() {
  return (
    <main className="bg-slate-600 min-h-screen"> 
      <div className="pt-4 flex justify-center">
        <DaysSince data={data} />
      </div>
      <div className="pt-4 flex justify-center">
        <Injuries data={data} />
      </div>
    </main>
  );
}
