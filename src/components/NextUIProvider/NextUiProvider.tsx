"use client";
import React from "react";
import { NextUIProvider } from "@nextui-org/react";
const NextUiProvider = ({children}:{children:any}) => {
  return <NextUIProvider>{children}</NextUIProvider>;
};

export default NextUiProvider;
