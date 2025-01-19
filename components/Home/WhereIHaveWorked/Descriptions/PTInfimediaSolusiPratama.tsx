import React from "react";
import ArrowIcon from "../../../Icons/ArrowIcon";
import { getTasksTextWithHighlightedKeyword } from "./taskAndType";

export default function PTInfimediaSolusiPratama() {
  const roles = [
    {
      title: "Software Developer",
      company: "Hybrid",
      date: "Jan 2022 - Apr 2022",
      description: [
        {
          text: "Led migration to new ERP and integration with Microsoft app and services.",
          keywords: ["ERP", "Microsoft"],
        },
        {
          text: "Managed backend operations for ERP, ensuring seamless functionality and data flow.",
          keywords: ["ERP", "Backend"],
        },
        {
          text: "Collaborated with cross-functional teams to streamline processes and optimize efficiency.",
          keywords: ["Collaboration", "Optimization"],
        },
        {
          text: "Implemented innovative solutions to enhance system performance and user experience.",
          keywords: ["Innovation", "Performance"],
        },
      ],
    },
    {
      title: "Junior Developer",
      company: "Full Time",
      date: "July 2022 - June 2023",
      description: [
        {
          text: "Led migration to new ERP and integration with Microsoft app and services.",
          keywords: ["ERP", "Microsoft"],
        },
        {
          text: "Managed backend operations for ERP, ensuring seamless functionality and data flow.",
          keywords: ["ERP", "Backend"],
        },
        {
          text: "Collaborated with cross-functional teams to streamline processes and optimize efficiency.",
          keywords: ["Collaboration", "Optimization"],
        },
        {
          text: "Implemented innovative solutions to enhance system performance and user experience.",
          keywords: ["Innovation", "Performance"],
        },
      ],
    },
    {
      title: "Power Platform Developer",
      company: "Full Time",
      date: "Jun 2023 - Nov 2024",
      description: [
        {
          text: "Developed automation for a mining document reminder program, improving efficiency.",
          keywords: ["Automation", "Mining", "Efficiency"],
        },
        {
          text: "Implemented ML classification for ERP software file naming, enhancing organization.",
          keywords: ["ML", "ERP", "File Naming"],
        },
        {
          text: "Created a backend for a corporate attendance program with 1000+ users, optimizing user management.",
          keywords: ["Backend", "Attendance", "User Management"],
        },
      ],
    },
    {
      title: ".NET Developer",
      company: "Full Time",
      date: "Jun 2023 - Nov 2024",
      description: [
        {
          text: "Developed financial applications using .NET framework.",
          keywords: [".NET Framework", "Financial Applications"],
        },
        {
          text: "Created payment request applications for internal use with optimal performance.",
          keywords: ["Payment Request", "Internal Use"],
        },
        {
          text: "Managed applications to ensure high standards of performance and functionality.",
          keywords: ["Performance", "Functionality"],
        },
      ],
    },
  ];

  return (
    <>
      <div className="flex flex-col space-y-8 max-w-xl px-4 md:px-0">
        {roles.map((role, index) => (
          <div key={index} className="flex flex-col space-y-5">
            {/* Role Header */}
            <div className="flex flex-col spacey-y-2">
              <span className="text-gray-100 sm:text-lg text-sm font-Arimo tracking-wide">
                {role.title} <span className="text-AAsecondary">@ {role.company}</span>
              </span>
              <span className="font-mono text-xs text-gray-500">{role.date}</span>
              <span
                className="font-mono text-xs text-AAsecondary hover:cursor-pointer"
                style={{ fontSize: "0.6rem" }}
                onClick={() => window.open("https://www.infimedia.co.id/", "_blank")}
              >
                www.infimedia.co.id
              </span>
            </div>
            {/* Role Description */}
            <div className="flex flex-col space-y-4 sm:text-sm text-xs">
              {role.description.map((item, idx) => (
                <div key={idx} className="flex flex-row space-x-1">
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
        ))}
      </div>
    </>
  );
}
