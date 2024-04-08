'use client';

import {useState, useEffect} from 'react';
import {Card, CardHeader, CardBody, CardFooter} from "@nextui-org/react";

export const DaysSince = ({data}: any) => {
    const [daysSinceLastInjury, setDaysSinceLastInjury] = useState(0);

    useEffect(() => {
      let today = new Date();
      let lastInjury = new Date(data.lastInjury)
      let name = data.name;
      let difference = today.valueOf() - lastInjury.valueOf();
      let differenceInDays = Math.round(difference / (1000 * 3600 * 24));
      setDaysSinceLastInjury(differenceInDays);
    });

    return (
    <div className="px-7">
      <Card className="max-w-[500px]">
        <CardHeader className="flex items-center justify-center bg-orange-600">
          <p className="text-2xl md:text-4xl font-bold">IT HAS BEEN</p>
        </CardHeader>
        <CardBody className="flex items-center justify-center pt-5">
          <p className="text-6xl md:text-8xl text-center font-bold">{daysSinceLastInjury} DAYS</p>
        </CardBody>
        <CardFooter>
          <p className="text-2xl md:text-4xl text-center font-bold">SINCE THE LAST SEASON-ENDING INJURY AT {data.name.toUpperCase()}</p>
        </CardFooter>
      </Card>
    </div>
    )
}