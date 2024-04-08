'use client';

import { useEffect } from 'react'
import { LocationPicker } from '@/app/components/locationPicker'
import {Link} from "@nextui-org/react";

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
    <main className="justify-center bg-slate-600 min-h-screen">
      <div className="flex">
      <div className="w-full text-center pt-4">
        <h1 className="text-white text-8xl pb-8">Season Enders</h1>
        <LocationPicker />
        <p className="pt-10 text-white">An attempt to catalog season-ending injuries in specific locations in the hopes of getting better facilities for these incredible athletes.</p>
        <p className="pt-5 text-white">Wanna add or update data? <Link href="https://github.com/seasonenders/seasonenders.github.io/tree/main/src/data" isExternal color="warning" underline="hover">Open a pull request!</Link></p>
      </div>
      </div>
      <div className="w-full text-center fixed bottom-0 text-white">Made with &#10084; by a nerd in Portland. As with all side-projects this one is heavily overbuilt for the job. &#128514;</div>
    </main>
  );
}
