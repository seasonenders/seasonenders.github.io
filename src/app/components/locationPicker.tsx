'use client'
import {Select, SelectItem} from "@nextui-org/react";

export const LocationPicker = () => {
    return (
      <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
        <Select 
          label="Select a location:" 
          className="max-w-xs"
          onChange={(key: any) => window.location.href = document.location.host + "/locations/" + key.target.value}
        >
            <SelectItem key="providencepark" value="providencepark">
                Providence Park
            </SelectItem>
        </Select>
      </div>
    );
  }