import { Footer, FooterCopyright, FooterDivider, FooterIcon, FooterLink, FooterLinkGroup, FooterTitle } from "flowbite-react";
import React from "react";
import { Link } from "react-router-dom";
import {BsFacebook} from 'react-icons/bs'

const Footercom = () => {
  return (
    <Footer container className="border border-t-8 border-teal-500 ">
      <div className="w-full max-w-7xl mx-auto">
        <div className="grid w-full justify-between sm:flex md:grid-cols-1">
          <div className="mt-5">
            {/* Logo */}
            <Link
              to={"/"}
              className="self-center whitespace-nowrap text-lg sm:text-xl font-semibold dark:text-white"
            >
              <span className="px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white">
                Praveen's
              </span>
              Blog
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-8 mt-4 sm:grid-cols-3 sm:gap-6">
            <div>
            <FooterTitle title="About" />
            <FooterLinkGroup col>
                <FooterLink href="#" target="_blank" rel="noopener noreferrer">
                    Projects
                </FooterLink>
                <FooterLink href="#" target="_blank" rel="noopener noreferrer">
                    Praveen's Blog
                </FooterLink>
                
            </FooterLinkGroup>
            </div>

            {/* follow us */}
            <div>
            <FooterTitle title="Follow US" />
            <FooterLinkGroup col>
                <FooterLink href="#" target="_blank" rel="noopener noreferrer">
                    Github
                </FooterLink>
                <FooterLink href="#" target="_blank" rel="noopener noreferrer">
                    Discord
                </FooterLink>
                
            </FooterLinkGroup>
            </div>

            <div>
            <div>
            <FooterTitle title="Legal" />
            <FooterLinkGroup col>
                <FooterLink href="#" target="_blank" rel="noopener noreferrer">
                    Privacy Policy
                </FooterLink>
                <FooterLink href="#" target="_blank" rel="noopener noreferrer">
                    Terms &amp; conditions
                </FooterLink>
                
            </FooterLinkGroup>
            </div>
            </div>
          </div>
        </div>
        <FooterDivider />
        <div className="w-full sm:flex sm:items-center sm:justify-between">
            <FooterCopyright href="#" by="Praveen's Blog" year={new Date().getFullYear()} />

            <div className="flex gap-6 sm:mt-0 mt-4 sm:justify-center">
                <FooterIcon href="#" icon={BsFacebook} />
                <FooterIcon href="#" icon={BsFacebook} />
                <FooterIcon href="#" icon={BsFacebook} />
                <FooterIcon href="#" icon={BsFacebook} />
                <FooterIcon href="#" icon={BsFacebook} />
            </div>
        </div>
      </div>
    </Footer>
  );
};

export default Footercom;
