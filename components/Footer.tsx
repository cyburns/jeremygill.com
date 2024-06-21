import React from "react";

const Footer = () => {
  return (
    <footer className="py-16 text-[14px] font-semibold uppercase space-y-16">
      <div className="max-w-3xl ml-[10%] md:ml-[40%] lg:ml-[55%]">
        <div className="mt-[20px] flex -mx-[10px] ml-[9.75rem]">
          <div className="col-5 offset-lg-6 offset-xl-7 col-lg-1 text-right">
            contact
          </div>
          <div className="col-5 offset-lg-6 offset-xl-7 col-lg-1 ml-5 text-start">
            <ul>
              <li>email</li>
              <li>instagram</li>
              <li>imdb</li>
              <li>phone</li>
            </ul>
          </div>
        </div>
        <div className="mt-[20px] flex -mx-[10px]">
          <div className="col-5 offset-lg-6 offset-xl-7 col-lg-1 text-right">
            site designed and developed by
          </div>
          <div className="col-5 offset-lg-6 offset-xl-7 col-lg-1 text-start ml-5">
            <ul>
              <li className="underline">bright studio</li>
            </ul>
          </div>
        </div>
        <div className="mt-[20px] flex -mx-[10px]  ml-[8.15rem]">
          <div className="col-5 offset-lg-6 offset-xl-7 col-lg-1 text-right">
            typography
          </div>
          <div className="col-5 offset-lg-6 offset-xl-7 col-lg-1 text-start ml-5">
            <ul>
              <li className="underline">manröpe</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="text-sm">
          © {new Date().getFullYear()} bright.
        </div>
        <div className="flex space-x-4 mt-4 md:mt-0">
          <a href="#" className="hover:underline">
            Contact Us
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
