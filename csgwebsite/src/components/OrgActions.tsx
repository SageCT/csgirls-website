// import React from "react";
import SmallActions from "./MobileActions";

const WEBLINKS = {
  REGISTER:
    "https://docs.google.com/forms/d/e/1FAIpQLSdE_W4GMqEJ2l7SzaAbjuUQ-cBt2OkFfM_PQq2wZuInOxCFsA/viewform",
  DONATE: "https://www.paypal.com/paypalme/CSGirls",
  OFFICERS: "/officers",
};

const OrgActions = () => {
  return (
    <>
      {/* Mobile View */}
      <div className="md:hidden flex flex-row mx-5 overflow-x-auto md:overflow-hidden">
        <div className="flex flex-auto flex-row justify-around md:mx-5 py-5">
          <SmallActions
            title="Subscribe to Our Newsletter!"
            pText="Words words words about the newsletter that IDK yet."
            bText="Subscribe!"
            optional="mt-1"
          />
          <SmallActions
            title="Donate to Our Organization!"
            pText="Words words words about donating that IDK yet."
            bText="Donate!"
            optional="mt-6"
          />
          <SmallActions
            title="Meet the Officers!"
            pText="Meet our current officers and committee members."
            bText="Learn More!"
            optional="mt-8"
          />
        </div>
      </div>
      {/* TODO: FIX BUTTON ON DONATE ACTION */}
      {/* Desktop View */}
      <div className="hidden md:flex md:flex-row">
        <div className="flex flex-1 justify-around bg-bggray w-screen py-[45px]">
          {/* Subscribe to Our Newsletter */}
          <div className="flex flex-col ml-10 justify-between">
            <h1 className="text-left text-4xl">Subscribe to Our Newsletter!</h1>
            <div>
              <p className="text-left text-xl max-w-[370px] mt-1">
                Get monthly updates on what's happening with CSG.
              </p>

              <button className="btn btn-primary normal-case mt-2">
                <a href={WEBLINKS.REGISTER}>Subscribe!</a>
              </button>
            </div>
          </div>

          {/* Donate to Our Organization */}
          <div className="flex flex-col content-center">
            <h1 className="text-left text-4xl">Donate to Our Organization!</h1>
            <div>
              <p className="text-left text-xl sm:w-[100px] md:max-w-[600px] max-h-[300px] pt-1">
                Donate to our organization to help us provide workshops,
                networking opportunities, and a warm fuzzy feeling inside.
              </p>

              <button className="btn btn-primary normal-case mt-2">
                <a href={WEBLINKS.DONATE}>Donate!</a>
              </button>
            </div>
            {/* Heart svg underneath Donate to Org */}
            <div className="absolute mx-[130px] -my-5 shrink-0 w-[200px] h-[200px]">
              <img src="./icons/heart-svgrepo.svg" className=" opacity-25" />
            </div>
          </div>

          {/* Meet the Officers */}
          <div className="flex flex-col content-center pl-2 ">
            <h1 className="text-left text-4xl w-44 md:w-[370px]">
              Meet The Officers!
            </h1>
            <div>
              <p className="text-left text-xl max-w-[370px] max-h-[121px] pt-1">
                Meet our current officers and committee members.
              </p>

              <button className="btn btn-primary normal-case mt-1 md:mt-2">
                <a href={WEBLINKS.OFFICERS}>Learn More!</a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OrgActions;
