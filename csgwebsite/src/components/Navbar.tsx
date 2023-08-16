const Navbar = () => {
  return (
    <>
      <div className="flex justify-between items-center pr-6 pb-28 mr-[118px] ">
        {/* CSG Logo (Purple) */}
        <img src="./Purp_WhiteBG_Logo.png" className="w-[113px] my-4 ml-32" />
        <ul>
          {/* Nav Bar Links */}
          <div className=" my-7 text-lg flex flex-row justify-between ">
            <li>
              <a
                href="#"
                className="flex flex-column text-black p-4 hover:text-gray-500"
              >
                About
              </a>
            </li>

            <li>
              <a
                href="#"
                className="flex flex-column text-black p-4 hover:text-gray-500"
              >
                Officers
              </a>
            </li>

            <li>
              <a
                href="#"
                className="flex flex-column text-black p-4 hover:text-gray-500"
              >
                Events
              </a>
            </li>

            <li className="min-w-[133px] max-h-[60px]">
              <a
                href="#"
                className="flex flex-column h-max-[60px] text-black p-4 pr-7 hover:text-gray-500"
              >
                Contact Us
              </a>
            </li>
            <button className="btn btn-primary normal-case mt-1">
              <a href="#">Register</a>
            </button>
          </div>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
