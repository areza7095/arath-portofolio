import React from "react";
import ArrowIcon from "../../../Icons/ArrowIcon";
import { getTasksTextWithHighlightedKeyword } from "./taskAndType";

export default function SolidSportOrganizer() {
  const tasks = [
    {
      text: "I set the match system at the event to keep it running optimally, and set up the database of the game participants so that it remains optimal for the system to use, and set the scoreboard during matches with a system that is run on a machine and many more, with MySQL, SET Sportdata",
      keywords: ["MySQL", "SET Sportdata"],
    },
    {
      text: "Managed the match system at events to ensure optimal performance and set up the database for game participants.",
      keywords: [],
    },
    {
      text: "Operated the scoreboard during matches using a machine-run system to enhance the overall experience.",
      keywords: [],
    }
  ];

  return (
    <>
      <div className="flex flex-col space-y-5 max-w-xl px-4 md:px-0">
        <div className="flex flex-col spacey-y-2">
          {/* Title */}
          <span className="text-gray-100 sm:text-lg text-sm font-Arimo tracking-wide">
          IT Support Technician <span className="text-AAsecondary">@ Seasonal</span>
          </span>
          {/* Date */}
          <span className="font-mono text-xs text-gray-500">March 2023 - Present</span>
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
