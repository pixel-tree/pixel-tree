interface TagProps {
  tag: string;
}

export const Tag = ({ tag }: TagProps) => {
  return (
    <>
      <div className="flex items-center gap-x-2">{
        tag
      }</div>
    </>
  );
};
