import Image from "next/image";
import React, { PropsWithChildren } from "react";

type QnaBlockProps = {
  heading: string;
  image?: string;
};

const QnaBlock = (props: PropsWithChildren<QnaBlockProps>) => {
  return (
    <div className="flex flex-col space-y-7">
      <h1 className="text-gray-900 sm:text-[1.8rem] only:border-b leading-loose border-gray-300 font-semibold text-[1.7rem]">
        {props.heading}
      </h1>
      <p className="">{props.children}</p>
      {props.image && (
        <Image
          src={props.image}
          width="400"
          height="200"
          style={{ height: "100%", width: "100%" }}
          alt="image"
        />
      )}
    </div>
  );
};

export default QnaBlock;
