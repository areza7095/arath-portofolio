
import React from "react";
import ArrowIcon from "../../../Icons/ArrowIcon";
import { getTasksTextWithHighlightedKeyword } from "./taskAndType";

export default function PTMitraIntegrasiInformatika() {
  const tasks = [
    {
      text: "Designed and implemented business solutions using Microsoft Power Apps and Microsoft Power Automate to streamline client processes.",
      keywords: ["Microsoft Power Apps", "Microsoft Power Automate"],
    },
    {
      text: "Developed and deployed scalable applications on Microsoft Power Platform, ensuring optimal performance and user experience.",
      keywords: ["Microsoft Power Platform"],
    },
    {
      text: "Configured and customized Microsoft Dynamics for client-specific business needs, enhancing operational efficiency.",
      keywords: ["Microsoft Dynamics"],
    },
    {
      text: "Utilized Microsoft Azure to deploy secure and reliable cloud-based solutions.",
      keywords: ["Microsoft Azure"],
    },
    {
      text: "Collaborated with cross-functional teams to provide end-to-end consulting services and support for digital transformation initiatives.",
      keywords: ["Consulting", "Digital Transformation"],
    },
  ];

  return (
    <>
      <div className="flex flex-col space-y-8 max-w-xl px-4 md:px-0">
        <div className="flex flex-col space-y-5">
          {/* Role Header */}
          <div className="flex flex-col spacey-y-2">
            <span className="text-gray-100 sm:text-lg text-sm font-Arimo tracking-wide">
              Technical Consultant Analyst{" "}
              <span className="text-AAsecondary">@ Full Time</span>
            </span>
            <span className="font-mono text-xs text-gray-500">Dec 2024 - Present</span>
            <span
              className="font-mono text-xs text-AAsecondary hover:cursor-pointer"
              style={{ fontSize: "0.6rem" }}
              onClick={() => window.open("https://www.mii.co.id/", "_blank")}
            >
              www.mii.co.id
            </span>
          </div>
          {/* Role Description */}
          <div className="flex flex-col space-y-4 sm:text-sm text-xs">
            {tasks.map((item, index) => (
              <div key={index} className="flex flex-row space-x-1">
                <ArrowIcon className={"h-5 w-4 text-AAsecondary flex-none"} />
                <span
                  className="text-gray-500 sm:text-sm text-xs"
                  dangerouslySetInnerHTML={{
                    __html: getTasksTextWithHighlightedKeyword(item.text, item.keywords),
                  }}
                ></span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
