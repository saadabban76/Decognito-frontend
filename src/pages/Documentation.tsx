import QnaBlock from "@/components/QnaBlock";
import React from "react";
import blockimg from "../../public/assets/images/blockImg.png";

const Documentation = () => {
  return (
    <div className="py-20">
      <div className="max-w-[700px] space-y-12 mx-auto text-gray-800">
        <div>
          <h1 className="text-gray-900 border-b leading-loose border-gray-300 font-semibold text-[1.7rem]">
            An incomplete guide to decognito
          </h1>
          {/* header section */}
          <div className="pt-12 leading-2 flex flex-col space-y-6">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
              saepe impedit provident voluptas quaerat nesciunt explicabo amet
              est alias quisquam?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Reprehenderit dignissimos id accusantium quam odio iure aliquam
              quo alias aliquid unde odit at soluta dicta, officiis adipisci
              nihil fugit inventore laboriosam porro voluptatem ipsum quod
              culpa? Sed consequatur laboriosam, quam, ipsam labore maxime
              ipsum, consectetur nesciunt illum at architecto distinctio harum?
            </p>
          </div>
        </div>

        {/* Qna Blocks */}
        <QnaBlock heading="Heading Two">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, aperiam
          impedit adipisci veniam doloribus maxime ipsam. Quos eius doloremque
          accusantium autem, quidem sed veniam commodi distinctio recusandae
          asperiores tempora quisquam pariatur. Esse autem recusandae
          praesentium error doloribus facilis, molestias, tempore commodi ut
          tenetur cumque in nostrum dolor quis fugit beatae.
        </QnaBlock>
        <QnaBlock heading="Heading Three" image={"/assets/images/blockImg.png"}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, aperiam
          impedit adipisci veniam doloribus maxime ipsam. Quos eius doloremque
          accusantium autem, quidem sed veniam commodi distinctio recusandae
          asperiores tempora quisquam pariatur. Esse autem recusandae
          praesentium error doloribus facilis, molestias, tempore commodi ut
          tenetur cumque in nostrum dolor quis fugit beatae.
        </QnaBlock>
        <QnaBlock heading="Heading One" image={"/assets/images/blockImg.png"}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, aperiam
          impedit adipisci veniam doloribus maxime ipsam. Quos eius doloremque
          accusantium autem, quidem sed veniam commodi distinctio recusandae
          asperiores tempora quisquam pariatur. Esse autem recusandae
          praesentium error doloribus facilis, molestias, tempore commodi ut
          tenetur cumque in nostrum dolor quis fugit beatae.
        </QnaBlock>
      </div>
    </div>
  );
};

export default Documentation;
