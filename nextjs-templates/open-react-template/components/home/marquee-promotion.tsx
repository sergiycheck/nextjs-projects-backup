import Marquee from "react-fast-marquee";
import { ContainerWrapper } from "../common/container-wrapper";

export const MarqueePromotion = () => {
  return (
    <section>
      <ContainerWrapper>
        <Marquee>
          <h2 className="text-4xl font-bold m-4">Let's work together</h2>
        </Marquee>
      </ContainerWrapper>
    </section>
  );
};
