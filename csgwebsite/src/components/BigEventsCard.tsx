// import React from "react";

interface CardProps {
  date: string;
  items: string[];
  optional?: string;
}

function BigEventsCard(props: CardProps) {
  return (
    <>
      {/* Change style of the div depending on if elongated is true/false */}
      {
        <div
          className={
            "flex flex-col min-w-[269px] min-h-[346px] mr-[51px] bg-bggray rounded-[20px]" +
            " " +
            props.optional
          }
        >
          <h1 className="flex flex-col text-center text-[36px] py-6">
            {props.date}
          </h1>
          <ol className="list-group list-disc pl-6">
            {props.items.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ol>
        </div>
        // If no images are provided, default to text only
      }
    </>
  );
}

export default BigEventsCard;
