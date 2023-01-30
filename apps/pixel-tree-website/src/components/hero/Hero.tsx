import { Button } from "../button/Button";
import { Title } from "../text";
import { LogoPixelTreeNoBg40 } from "../utils";

export const Hero = () => {
  return (
    <section
      className="
        mt-40
        grid
        w-full
        grid-cols-1
        grid-rows-2
        gap-y-24
        px-7
        md:mt-0
        md:grid-cols-2
        md:grid-rows-1
        md:px-32
    "
      style={{
        height: "calc(80vh - 80px)",
      }}
    >
      <div
        className="
            flex
            flex-col
            items-start
            justify-center
            gap-5"
      >
        <Title className="text-left">Cosecha el futuro</Title>
        <p className="text-lg text-gray-500">
          Somos una empresa de desarrollo de software enfocada en la creación de
          soluciones tecnológicas para la industria.
        </p>
        <Button>Conoce más</Button>
      </div>
      <div
        className="
        flex
        items-center
        justify-center
        "
      >
        <LogoPixelTreeNoBg40 className="text-[160px]" />
      </div>
    </section>
  );
};
