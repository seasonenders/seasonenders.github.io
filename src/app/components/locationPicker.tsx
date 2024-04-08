'use client'
import {Select, SelectItem} from "@nextui-org/react";

export const LocationPicker = () => {
    return (
      <div>
        <Select 
          label="Select a location:" 
          className="max-w-xs"
          onChange={(key: any) => window.location.href = document.location.origin + "/locations/" + key.target.value}
        >
            <SelectItem key="providencepark" value="providencepark">
                Providence Park
            </SelectItem>
        </Select>
      </div>
    );
  }