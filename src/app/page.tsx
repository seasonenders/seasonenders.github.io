import { DaysSince } from './components/dayssince'

export default function Home() {
  return (
    <main className="flex justify-center"> 
      <div className="pt-4">
      <DaysSince />
      </div>
    </main>
  );
}
