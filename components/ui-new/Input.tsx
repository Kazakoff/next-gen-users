/* eslint-disable @typescript-eslint/no-explicit-any */
 
import React from 'react'
import { TextInput } from "flowbite-react";

export const Input = ( props: any ) => {
    return (
      <TextInput   {...props}  >
        {props.children}
      </TextInput>
    )
  }

