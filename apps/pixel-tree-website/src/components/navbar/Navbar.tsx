import { navRoutes } from "../../routes/routes";
import { Dropdown } from "../dropdown/Dropdown";
import { LogoPixelTreeNoBg40 } from "../utils";

const items = navRoutes.map(({ path, name }) => (
  <li key={path} className="text-[#878593]">
    <a href={path}>{name}</a>
  </li>
));

export const Navbar = () => {
  return (
    <nav className="h-20 flex justify-between bg-transparent px-5 md:px-40 py-6">
      <div className="">
        <h2 className="flex items-center gap-4 text-white font-medium text-2xl">
          <LogoPixelTreeNoBg40 />
          <a href="/">Pixel Tree</a>
        </h2>
      </div>
      <div>
        <ul className="md:flex gap-8 hidden">{items}</ul>
        <Dropdown>{items}</Dropdown>
      </div>
    </nav>
  );
};
