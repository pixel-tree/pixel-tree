import { navRoutes } from "../../routes/routes";
import { LogoPixelTreeNoBg40 } from "../utils";

export const Navbar = () => {
  return (
    <nav className="h-20 flex justify-between bg-transparent px-28 py-10">
      <div className="">
        <h2 className="flex items-center gap-4 text-white font-medium text-2xl">
          <LogoPixelTreeNoBg40 />
          <a href="/">Pixel Tree</a>
        </h2>
      </div>
      <div>
        <ul className="flex gap-8">
          {navRoutes.map(({ path, name }) => (
            <li key={path} className="text-[#878593]">
              <a href={path}>{name}</a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};
