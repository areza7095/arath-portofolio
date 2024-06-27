import React from "react";
import GithubIcon from "../../Icons/GithubIcon";
import LinkedinIcon from "../../Icons/LinkedinIcon";
import InstagramIcon from "../../Icons/InstagramIcon";
import YoutubeIcon from "../../Icons/YoutubeIcon";
type Props={href:string,Icon:React.FC<{className:string}>}
const ClickableIcon = (props:Props) => {
  return (
    <a href={props.href} className="" target={"_blank"} rel="noreferrer">
      <props.Icon
        className={
          "w-5 h-5 text-gray-400 hover:text-AAsecondary transition duration-800 fill-current hover:cursor-pointer "
        }
      />
    </a>
  );
};

export default function Fotter(props:{link:string,className:string}) {
  return (
      <div className={` ${props.className} bg-AAprimary flex flex-col justify-center items-center py-8 space-y-4 `}>
        {/* // ? Reach me at */}
        <div className="flex flex-row space-x-8">
          <ClickableIcon
            href={"https://github.com/areza7095"}
            Icon={GithubIcon}
          />
          <ClickableIcon
            href={"https://instagram.com/rezzzaaa.ar"}
            Icon={LinkedinIcon}
          />
          <ClickableIcon
            href={"https://www.instagram.com/rezzzaaa.ar/"}
            Icon={InstagramIcon}
          />
        </div>
        <a href={props.link} className="" target={"_blank"} rel="noreferrer">
          <div
            className="group flex flex-col font-mono justify-center items-center  text-gray-400 
    text-sm  space-y-2  "
          >
            <span className="group-hover:text-AAsecondary sm:text-sm text-xs">
              Designed & Built by Ahmad Reza A
            </span>
          </div>
        </a>
      </div>
  );
}
