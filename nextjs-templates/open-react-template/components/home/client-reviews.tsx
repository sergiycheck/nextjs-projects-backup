"use client";

import React from "react";
import { motion, useInView } from "framer-motion";
import { ContainerWrapper } from "../common/container-wrapper";

const clients = [
  {
    name: "Isabella Rainfield",
    title: "CEO at Bitoftrade",
    image: "/images/home/clients/client-1.png",
    feedback: `Craft Studio has played a crucial role in enhancing the user experience on bitoftrade. Their creative input in designing our platform's interface and graphics has not only made the trading experience visually appealing but also user-friendly. Craft Studio's attention to detail and ability to capture the essence of our brand has significantly contributed to establishing bitoftrade as a trustworthy and engaging crypto trading platform.`,
  },
  {
    name: "Orion Thunderheart",
    title: "CEO at Tokenframe",
    image: "/images/home/clients/client-2.png",
    feedback: `Craft Studio's artistic prowess has brought a unique and captivating dimension to tokenframe's casting services. Their ability to craft visually stunning representations of crypto concepts and narratives has added a touch of creativity and authenticity to our content. Thanks to Craft Studio, tokenframe stands out as a go-to platform for high-quality and visually impactful crypto-related casting services.`,
  },
  {
    name: "Seraphina Evergreen",
    title: "CEO at Blindspot",
    image: "/images/home/clients/client-3.png",
    feedback: `Craft Studio's contribution to bindspot's cybersecurity platform has been invaluable. Their ability to visually communicate complex cybersecurity concepts has significantly enhanced our users' understanding of our services. Craft Studio's designs not only make our platform visually appealing but also aid in effectively conveying the importance of cybersecurity. The collaboration has been instrumental in reinforcing bindspot's commitment to security and user education.`,
  },
  {
    name: "Maximus Sterling",
    title: "CEO at Streamsync",
    image: "/images/home/clients/client-4.png",
    feedback: `Craft Studio has been a key player in the success of streamsync's streaming platform. Their creative designs and visual storytelling have added a layer of excitement to our user interface, making the streaming experience more engaging. Craft Studio's ability to capture the essence of diverse content genres has contributed to streamsync becoming a versatile and visually appealing platform, catering to a wide audience of streaming enthusiasts.`,
  },
];

export function ClientReviews() {
  return (
    <section id="client-reviews">
      <ContainerWrapper className="relative">
        <h2 className="h2 text-center">Clients reviews</h2>

        {clients.map((item, index) => (
          <ClientReview key={index} item={item} />
        ))}
      </ContainerWrapper>
    </section>
  );
}

type ClientReviewProps = {
  item: {
    name: string;
    title: string;
    image: string;
    feedback: string;
  };
};

function ClientReview({ item }: ClientReviewProps) {
  const { name, title, image, feedback } = item;

  const secondColumnRef = React.useRef<HTMLDivElement>(null);

  const isInView = useInView(secondColumnRef, { once: true });

  return (
    <div className="grid grid-cols-2 relative gap-4">
      <div className="flex items-center justify-center">
        <motion.div
          className="sticky top-20 w-[200px] h-auto overflow-hidden "
          style={{
            transform: isInView ? "none" : "translateX(-200px)",
            opacity: isInView ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
          }}
        >
          <motion.img src={image} className="w-full h-full object-cover" />
        </motion.div>
      </div>

      <div
        className="flex flex-col gap-4"
        ref={secondColumnRef}
        style={{
          transform: isInView ? "none" : "translateY(200px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
        }}
      >
        <div className="flex flex-col h-[400px] justify-center items-center">
          <p className="text-lg line-clamp-3 mb-8">{feedback}</p>
          <p className="text-lg text-center">- {name}</p>
          <p className="text-lg text-gray-400 text-center">{title}</p>
        </div>
      </div>
    </div>
  );
}
