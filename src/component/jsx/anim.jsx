import { TextLoop } from "react-text-loop-next";
import React from 'react'

export default function Anim() {
  return (
    <div>
      <TextLoop>
        <span>First item</span>
        <a href="/">Second item</a>
        <p style={{ color: "red" }}>Third item</p>
      </TextLoop>{" "}
    </div>
  )
}
