import { Button } from "../button";
import { Title } from "../text";

export const Hero = () => {
  return (
    <section
      className="
        mt-40
        grid
        h-[calc(80vh-80px)]
        w-full
        grid-cols-1
        grid-rows-2
        gap-y-24
        px-7
        md:mt-0
        md:grid-cols-2 md:grid-rows-1 md:px-32
    "
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
        <div className="flex h-full w-full items-center justify-center">
          <img
            className="h-full w-full object-contain"
            src="./public/planet-test.png"
            alt="world-image"
          />
        </div>
      </div>
    </section>
  );
};
