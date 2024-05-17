import React, { useRef } from "react";
import Card from "../components/Card";


function Foreground() {

  const ref = useRef(null)
    
  const data = [
    {
      desc: "Run Sucessfully",
      filesize: ".9mb",
      close: false,
      tagColor: "green",
      tag: {
        isOpen: true,
        tagTitle: "Download Now",
        opacity: 600
      },
    },
    {
      desc: "Run Sucessfully",
      filesize: ".9mb",
      close: false,
      tag: {
        isOpen: true,
        tagTitle: "Download Now",
        tagColor: "blue",
        opacity: 600
      },
    },
    {
      desc: "Run Sucessfully",
      filesize: ".9mb",
      close: false,
      tag: {
        isOpen: true,
        tagTitle: "Download Now",
        tagColor: "green",
        opacity: 600
      },
    },
  ];

  return (
    <>
      <div ref={ref} className="fixed top-0 left-0 z-[3] h-full w-full flex gap-10 flex-wrap p-5">
        {data.map((item, index) => (
          <Card data={item} key={index} reference={ref} />
        ))}
        ;
      </div>
    </>
  );
}

export default Foreground;
