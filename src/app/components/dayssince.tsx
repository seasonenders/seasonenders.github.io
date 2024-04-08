import {Card, CardHeader, CardBody, CardFooter} from "@nextui-org/react";
import data from "@/data/providencePark.json"

export const DaysSince = () => {
    let today = new Date();
    let lastInjury = new Date(data.lastInjury)
    let difference = today.valueOf() - lastInjury.valueOf();
    let differenceInDays = Math.round(difference / (1000 * 3600 * 24));

    return (
    <div className="px-7">
      <Card className="max-w-[700px]">
        <CardHeader className="flex items-center justify-center bg-orange-600">
          <p className="text-4xl font-bold">IT HAS BEEN</p>
        </CardHeader>
        <CardBody className="flex items-center justify-center">
          <p className="text-8xl text-center font-bold">{differenceInDays} DAYS</p>
        </CardBody>
        <CardFooter>
          <p className="text-4xl text-center font-bold">SINCE THE LAST SEASON-ENDING INJURY ON THE PROVIDENCE PARK TURF</p>
        </CardFooter>
      </Card>
    </div>
    )
}