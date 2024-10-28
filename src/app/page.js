"use client";

import Link from "next/link"


export default function Home(){
  return(
    <section className="">
     <h1 className="bg-gray p-4 m-4 text-red-500 text-center">All Quizss</h1>
      <ul className="flex m-7 py-8">
        <li className="">
          <Link href="/Quiz/1">Quiz 1</Link>
        </li>
        <li>
        <Link href="/Quiz/2">Quiz 2</Link>
        </li>
        <li>
        <Link href="/Quiz/3">Quiz 3</Link>
        </li>
      </ul>
    </section>
  )
}