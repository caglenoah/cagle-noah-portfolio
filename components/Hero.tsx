import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCircles";
import Link from "next/link";

type Props = {};

export default function Hero({}: Props) {
  const [text, count] = useTypewriter({
    words: [
      "The names Noah",
      "Im a real mans man",
      "I like beer and objectifying women",
    ],
    loop: true,
    delaySpeed: 2000,
  });

  return (
    <div
      className="h-screen flex flex-col space-y-8 items-center justify-center
    text-center overflow-hidden"
    >
      <BackgroundCircles />
      <img
        className="relative rounded-full h-32 w-32 mx-auto object-cover"
        src="https://lh3.googleusercontent.com/pw/AP1GczNTkjHKXt6iF7mIAbUEjypqdyyUwdiL-rlDd_-Tt2Xpl-6tiXphYAKIaYhOXQYFaB38d72xaUMrlHg5wn0_8rV2gx9aiedowZlrWD7KKmGLHJ6D_2zsOl2mHLcRtcAL4ELrGBVNk-bWAmZbfno96BsLe7sUtUSAS7RmMUuj_5yyw3YKSnNoJTTfTZ4dZYz44FTOONAMNZUFZEsmUWDvmzF8pxiOxdOWYYQRvRt5sOcnLt_EwKckOBR0i1jdK-9qARuEQhM6SkNWcEYBqje3gBR2hgX45S3W_RllbkeLsdFVkSLVBA5nkCUSbjqZaccLDZ7K1WW2NASrLOPSEC36RC55nDINF98onhZWkHQRLt980PLKwCikMZE_pgbrH2hbGHtdUYps9OyozezL4jZuXQjGcAIKSeZ7JXPgVcqefyFLaalDKrLC92Fl6NPs0qv7MX3z8aeYd3XXZwBmqp4H3tYLKNrkKrq3cCMrcEY3xiH6XoJYx6RdhXMgt_4yqepO5W2SQu_bZIfve1Vx_vRbLwutcybSSrYIW--flUgN5wHwoBphwSYicI3Ig1dxIs4J-4JmTB9ou4tRUwuRoBryEjjoAb9FoPDinFmvfHUT0PqyaCSl9VKjxitFgKUnCOPc1zJMV9BCAtdY3a-UzsOqGGScEhSsVv5hAoiUOwhGMZjqDAD-ENqTdUcM-eMj4jx8IsesULsEZn9wZ-tGUpBW_JOIv7zgBTh9cPoH6jBi2sTp3YeJoxCU527nzekzEOnc_Bz2eaVNkvSpQMe3M3XWe5X_rFn1zJUaCM4aqV6ZLkgbftsRZSp9RVGyVqQImgLlt3laQv5tiOJYVzSiZXXOZWe-xSThvDbsu8eSS6ey4zIOxXfBAJatKgXnRf_gAdL0xZ8sYs3M-bvKiF2LvDL054s=w1068-h1424-s-no-gm?authuser=0"
        alt=""
      />
      <div className="z-20">
        <h2 className="text-sm uppercase text-gray-500 pb-2 tracking-[15px]">
          Software Engineer
        </h2>
        <h1 className="text-5xl lg:text-6xl font-semibold px-10">
          <span className="mr-3">{text}</span>
          <Cursor cursorColor="yellow" />
        </h1>

        <div className="pt-5">
          <Link href="#about">
            <button className="heroButton">About</button>
          </Link>
          <Link href="#experience">
            <button className="heroButton">Experience</button>
          </Link>
          <Link href="#skills">
            <button className="heroButton">Skills</button>
          </Link>
          <Link href="#projects">
            <button className="heroButton">Projects</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
