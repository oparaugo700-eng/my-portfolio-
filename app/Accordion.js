"use state"
import React from 'react'
import Accord from './Accord';
import Link from 'next/link';
import Sliders from './Sliders';

export default function Accordion() {
  const sections = [
    {
      title: 'API',
      content: 'I developed the website to display some DummyJson file.',
      link: <Link href="http://api-one-theta-41.vercel.app" target='_blank'>API</Link>,
    },
    {
      title: 'H-Hambuger',
      content: 'Showcasing H-Hambuger UI.',
      image: <Sliders />,
    },
    {
      title: 'Get-Sporty',
      content: 'I developed this mini sport website to show some of the best sport players in some of the best sports played today.',
      link: <Link href="https://sport-six-ochre.vercel.app" target='_blank'>Get-Sporty</Link>,
    },
  ];
  return (
    <section>
      <Accord sections={sections} />
    </section>
  )
}
