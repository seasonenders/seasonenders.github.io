'use client';

import { useEffect } from 'react'
import { LocationPicker } from '@/app/components/locationPicker'

export default function Home() {
  //safari has a weird back and forward cache behavior
  //this forces a reload of the page to clear the values if it's restored from cache
  useEffect(() => {
    const checkBfcache = (e: any) => {
      if (e.persisted) {
        window.location.reload();
      }
    };
    window.addEventListener("pageshow", checkBfcache);
  }, []);

  return (
    <main className="flex justify-center bg-slate-600 min-h-screen">
      <div className="w-full text-center pt-4">
        <h1 className="text-white text-8xl pb-8">Season Enders</h1>
        <LocationPicker />
        <p className="pt-10 text-white">This site attempts to catalog season-ending injuries in specific locations to see if trends can be identified, etc.</p>
      </div>
    </main>
  );
}
