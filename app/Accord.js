"use state"
import { useState, React } from 'react'

export default function Accord({ sections }) {
  const [activeIndex, setActiveIndex] = useState(null);
  const toggleSection = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="" >
      {sections.map((section, index) => (
        <div key={index} className="shadow bg-slate-100">
          <div
            className="flex justify-between items-center p-2 pointer-coarse:"
            onClick={() => toggleSection(index)}
          >
            <h3 className="font-bold">{section.title}</h3>
            <span>
              {activeIndex === index ? '-' : '+'}
            </span>
          </div>
          {activeIndex === index && (
            <div className="p-[10px]">
              <p>{section.content}</p>
              <p className="pt-2 text-center underline hover:text-shadow-neutral-700">{section.link}</p>
              <div >{section.image}</div>
            </div>
          )}
        </div>
      ))}
    </section>
  )
}








