import { LocationPicker } from '@/app/components/locationPicker'

export default function Home() {
  return (
    <main className="flex justify-center bg-slate-600 min-h-screen">
      <div className="w-full text-center pt-6">
      <LocationPicker />
      </div>
    </main>
  );
}
