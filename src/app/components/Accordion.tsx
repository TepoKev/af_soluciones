import React, { useState } from "react";
import Element from "../classes/AccordElement";

interface AccordionItemProps {
  index: number;
  title: string;
  isActive: boolean;
  onToggle: (index: number) => void;
  children: React.ReactNode;
}

const Accordion = ({elements}: {elements: Array<Element>}) => {
  const [activeIndex, setActiveIndex] = useState(-1);

  const handleToggle = (index: number) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? -1 : index));
  };

  return (
    <div
      id="accordion-flush"
      data-accordion="collapse"
      data-active-classes="bg-white"
    >
        {elements.map((element, index) => {
            return (
                <AccordionItem
                    index={index}
                    title={element.getTitle()}
                    isActive={activeIndex === index}
                    onToggle={handleToggle}
                >
                    {element.getHtmlElements()}
                </AccordionItem>
            )
        })}
    </div>
  );
};

const AccordionItem = ({
  index,
  title,
  isActive,
  onToggle,
  children,
}: AccordionItemProps) => {
  return (
    <div>
      <h2 id={`accordion-flush-heading-${index}`}>
        <button
          type="button"
          className={`flex items-center justify-between w-full py-5 font-medium rtl:text-right  border-b border-gray-200 gap-3 ${
            isActive ? "active" : ""
          }`}
          data-accordion-target={`#accordion-flush-body-${index}`}
          aria-expanded={isActive}
          aria-controls={`accordion-flush-body-${index}`}
          onClick={() => onToggle(index)}
        >
          <span>{title}</span>
          <svg
            data-accordion-icon
            className={`w-3 h-3 rotate-180 shrink-0 ${
              isActive ? "active" : ""
            }`}
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 10 6"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 5 5 1 1 5"
            />
          </svg>
        </button>
      </h2>
      <div
        id={`accordion-flush-body-${index}`}
        className={isActive ? "" : "hidden"}
        aria-labelledby={`accordion-flush-heading-${index}`}
      >
        {children}
      </div>
    </div>
  );
};

export default Accordion;
