import React from 'react';
import Link from "next/link";

const digitalMarketing = () => {
  return (
    <div className="w-full">
      <div className=" h-[25vh] relative">
        <div className="absolute top-0 left-0 w-full h-[25vh]" />
      </div>
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="text-xl tracking-widest uppercase font-semibold">
        Digital Marketing
        </p>
        <p>Course Outline</p>
      </div>
      <div className="max-w-[1240px] mx-auto px-2 py-2">
      <Link href="/#SkillDevelopment">
          <p className="underline cursor-pointer">Back</p>
        </Link>
      </div>
    </div>
  )
}

export default digitalMarketing