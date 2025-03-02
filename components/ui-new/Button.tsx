 
import React from 'react'
import { Button as RawButton } from "flowbite-react";

export const Button = ( props: any ) => {
    return (
      <RawButton   {...props}  >
        {props.children}
      </RawButton>
    )
  }

