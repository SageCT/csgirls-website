import React from "react";
import SmallCard from "./SmallCard";

const PICLINKS = {
  SHIRTF: "./shirt-front.png",
  SHIRTB: "./shirt-back.png",
  BANNERPIC: "./fgm-image.jpg",
};

function AboutMain() {
  return (
    <>
      {/* Mobile Variant */}
      <div className="overflow-y-auto">
        {/* Group Image */}
        <div className="w-screen h-[242px] bg-slate-600"></div>
        {/* <img src="./group-image.jpg" className="w-screen h-[242]" /> */}

        {/* Title Text */}
        <h1 className="flex flex-row font-poppins text-2xl py-4 justify-center ">
          About Us!
        </h1>

        {/* Main Text */}
        <div className="flex flex-col justify-center pl-3">
          <p className="pb-6">
            In August 2013, Computer Science Girls (CSGirls) was created as a
            platform for students to meet, discuss, and celebrate their love for
            computer science. Today, CSGirls is known for cultivating bright,
            talented professionals and upholding relationships with top
            employers in the country.
          </p>
          <p className="pb-6">
            CSGirls was founded on the principles of promoting a safe
            environment for students and recognizing excellence within the
            technology community at the University of Houston. Our main
            objective is to guide women in technology; however, we welcome
            people from all backgrounds. In line with our university’s values,
            we strive to create a diverse and inclusive community for our
            members to promote fellowship.
          </p>
        </div>
        {/* Why Should You Join CSG? */}
        <h1 className="flex flex-row justify-center text-2xl">
          Why Should You Join CSGirls?
        </h1>
        <div>
          <div className="flex flex-row justify-center pt-6">
            <SmallCard
              title="Free T-shirt for Yearly Members!"
              pText="$18 dollars for non-members. Semester members can always upgrade to yearly and get the free shirt for $10!"
              elongated={true}
            />
          </div>
          <ul>
            <li className="">
              <SmallCard
                title="Free T-Shirt for Yearly Members!"
                pText=""
              ></SmallCard>
            </li>
            <li>Attend our workshops and events</li>
            <li>Participate in our mentorship program</li>
            <li>Be a part of our community</li>
          </ul>
        </div>
        {/* Use card components to add features/perks of joining */}
      </div>
    </>
  );
}

export default AboutMain;
