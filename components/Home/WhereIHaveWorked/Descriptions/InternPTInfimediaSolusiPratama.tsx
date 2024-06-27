import React from "react";
import ArrowIcon from "../../../Icons/ArrowIcon";
import { getTasksTextWithHighlightedKeyword } from "./taskAndType";

export default function InternPTInfimediaSolusiPratama() {
  const tasks = [
    {
      text: "Worked on the front-end development in the Sharepoint Webpart domain using ReactJS, PnpSp, Sharepoint Online, and ANT Design",
      keywords: ["ReactJS", "PnpSp", "Sharepoint Online", "ANT Design"],
    },
    {
      text: "Worked on integrating an ERP platform with a SharePoint web portal using Python, Django, SharePoint Online, and ReactJS.",
      keywords: ["Python", "Django", "Sharepoint Online", "ReactJS"],
    }
  ];

  return (
    <>
      <div className="flex flex-col space-y-5 max-w-xl px-4 md:px-0">
        <div className="flex flex-col spacey-y-2">
          {/* Title */}
          <span className="text-gray-100 sm:text-lg text-sm font-Arimo tracking-wide">
            Junior Developer <span className="text-AAsecondary">@ Intern</span>
          </span>
          {/* Date */}
          <span className="font-mono text-xs text-gray-500">Jan 2022 - April 2022</span>
          <span
            className="font-mono text-xs text-AAsecondary hover:cursor-pointer"
            style={{ fontSize: "0.6rem" }}
            // set on click to open the website
            onClick={() => window.open("https://www.infimedia.co.id/", "_blank")}
          >
            www.infimedia.co.id
          </span>
        </div>
        <div className="flex flex-col space-y-4 sm:text-sm text-xs">
          {/* Tasks Description 1 */}
          {tasks.map((item, index) => {
            return (
              <div key={index} className="flex flex-row space-x-1">
                <ArrowIcon className={" h-5 w-4 text-AAsecondary flex-none"} />
                <span
                  className="text-gray-500 sm:text-sm text-xs"
                  dangerouslySetInnerHTML={{
                    __html: getTasksTextWithHighlightedKeyword(item.text, item.keywords),
                  }}
                ></span>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
