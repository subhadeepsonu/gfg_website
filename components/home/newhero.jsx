"use client";
import { TextGenerateEffect } from "../ui/text-generate-effect";

const words = "teri maki";

export default function Newhero() {

  return <div>
  <TextGenerateEffect words={words} />
  <div className="text-white">haha</div>
  </div>
}
