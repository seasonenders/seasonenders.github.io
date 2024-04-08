'use client'

import React, { useMemo, useState } from 'react'

import {Select, SelectItem} from "@nextui-org/react";

export const LocationPicker = () => {
  const [SelectedCity, SetSelectedCity] = React.useState();

  useMemo(() => {
  }, [SelectedCity])

  return (
    <div>
      <Select 
        label="Select a location:" 
        className="max-w-xs"
        onChange={(key: any) => window.location.href = document.location.origin + "/locations/" + key.target.value}
      >
          <SelectItem key="providencepark" value="providencepark" onClick={(key: any) => console.log(key)}>
              Providence Park
          </SelectItem>
      </Select>
    </div>
  );
}