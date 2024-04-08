import { DaysSince } from './components/dayssince'

export default function Home() {
  return (
    <main className="flex justify-center bg-slate-600 min-h-screen"> 
      <div className="pt-4">
      <DaysSince />
      </div>
    </main>
  );
}
