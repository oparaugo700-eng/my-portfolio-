"use client"
import { Button } from "@mui/material";
import Link from "next/link";
import Accordion from "./Accordion";
import Progress from "./progress/Progress";

export default function Home() {

  return (
    <main className="" >

      <header className="p-2.5 flex flex-col justify-center items-center sm:flex-row md:justify-evenly sm:gap-4 bg-gray-800 bg-[url('/wallpaper.jpg')] bg-cover bg-no-repeat  xl:h-[80vh] ">

        <section className="order-last ml-1.5 md:order-first text-white text-shadow-2xs text-shadow-black ">
          <p className="text-2xl font-medium md:font-bold lg:text-3xl ">Web Developer</p>
          <p className="lg:text-2xl ">I am Kingsley Opara</p>
          <p className="lg:text-2xl">I am a web developer from Nigeria, I live in Abuja.</p>
          <p className="lg:text-2xl pb-3">I studied web development At Early Code LTD.</p>
          <div className="mb-6 md:mb-0">
            <Link href="https://wa.me/+2349160909422"><Button color="success" variant="contained" >Contact me</Button></Link>
          </div>

        </section>

        <img
          src="/website-9022660.png"
          alt="profile-picture"
          className="w-[200px] h-[200px]  md:w-[300px] mt-4 md:h-[300px] order-first mb-4 sm:order-last lg:mb-0 lg:w-[500px]  "
        />
      </header>
      <section className="flex flex-col mt-[2em] mx-[1em] md:mx-[2em] sm:justify-center items-center md:flex-row gap-1 lg:gap-7">
        <div>
          <p className="text-center font-bold text-2xl md:text-3xl mb-2">About Me</p>
          <p>I have always be curious about how the web works, and i love how other developers build a website, from the structure of the webiste to the designs the beautiful animations and transition and down to the interactions of the websites.</p>
          <p>So i deceided to do some research on it and i learnt how it works and how to build one, so i deceided to take up the challange to learn how to build a website.</p>
          <p>I am currently at the early stage of my journey in software engineering, i am passionate about it and i am committed to continous learning and applying technology to solve real-word problems.</p>
          <p>I value precision, problem-solving, and attention to details skills that translate seamlessly into my work in technology.</p>
          <p>I am passionate about lifelong learning, innovation and making an impact in the technology sectors.</p>
        </div>

        <img
          src="/ai-generated-8329596.jpg"
          width={3750}
          height={3750}
          className="w-[500px] lg:w-[200px] md:h-[400px] xl:w-[700px] xl:h-[600px]"
        />

      </section>


      <div className="bg-stone-50 sm:w-[500px] md:w-[700px] sm:mx-auto  h-fit flex my-[80px] p-4 sm:p-[5em] text-black ">
        <section className="w-[90vw] flex flex-col sm:w-[340px] md:w-[500px] ">
          <li>Personal project</li>
          <Accordion />
        </section>
      </div>

      <section className=" sm:w-[500px] md:w-[700px] mx-auto mb-4">
        <p className="text-2xl ">MY SKILL LEVEL</p>
        <div className="bg-stone-200 flex flex-col items-center gap-1 pt-3 text-black">
          <Progress />
        </div>

      </section>


    </main>
  );
}
