'use client'

import {Select, SelectItem} from "@nextui-org/react";

export const LocationPicker = () => {
  const handleSelectionChange = (e: any) => {
    window.location.href = document.location.origin + "/locations/" + e.target.value;
  };

  return (
    <div>
      <Select 
        label="Select a location:" 
        className="max-w-xs"
        onChange={handleSelectionChange}
      >
          <SelectItem key="providencepark" value="providencepark">
              Providence Park
          </SelectItem>
      </Select>
    </div>
  );
}