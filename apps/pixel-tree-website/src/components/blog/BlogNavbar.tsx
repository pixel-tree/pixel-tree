import { LogoPixelTreeNoBg40 } from '../utils'

export const BlogNavbar = () => {
  return (
    <nav className="h-20 flex justify-between bg-transparent px-5 md:px-40 py-6">
      <div className="">
        <h2 className="flex items-center gap-4 text-white font-medium text-2xl">
          <a href="/"><LogoPixelTreeNoBg40 /></a>
          <a href="/">Pixel Tree</a>
          {/* TODO: Blog chip */}
        </h2>
      </div>
      <div>
        <a href='/blog' className="text-[#878593]">Inicio</a>
      </div>
    </nav>
  )
}
