interface TagProps {
  tag: string;
}

interface Variants {
  [key: string]: string;
}

const variants: Variants = {
  experiencias: "border-badge-experiencias text-badge-experiencias",
  noticias: "border-badge-noticias text-badge-noticias",
  proyectos: "border-badge-proyectos text-badge-proyectos",
  tutoriales: "border-badge-tutoriales text-badge-tutoriales",
};

export const Tag = ({ tag }: TagProps) => {
  return (
    <>
      <div
        className={`inline-block items-center gap-x-2 border rounded-md px-1 max-w-fit text-sm bg-badge-fondo ${variants[tag]}`}
      >
        {tag.toUpperCase()}
      </div>
    </>
  );
};
