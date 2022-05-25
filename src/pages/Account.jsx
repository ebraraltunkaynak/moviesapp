import React from "react";
import SavedShows from "../components/SavedShows";

const Account = () => {
  return (
    <>
      <div className="w-full text-white">
        <img
          className="  w-full h-[400px]  object-cover"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/970e664f-2df4-47ce-b4fa-446082f5abc1/8dbc9f27-af3e-4f34-93ca-27c9f07b96f2/TR-tr-20220523-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt=""
        />
        <div className="bg-black/60 fixed top-0 left-0 w-full h-[550px]"></div>
        <div className="absolute top-[20%] p-4 md:p-8">
          <h1 className="text-4xl  text-white md:Text-5xl font-bold"> My Shows</h1>
        </div>
      </div>
      <SavedShows />
    </>
  );
};

export default Account;
