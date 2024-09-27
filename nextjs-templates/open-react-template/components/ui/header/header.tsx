import Link from "next/link";
import MobileMenu from "./mobile-menu";
import { ContainerWrapper } from "../../common/container-wrapper";
import { headerElements } from "./shared";

export default function Header() {
  return (
    <>
      {/* TODO: backdrop blur not working on ios iphone */}
      <header className="fixed w-full z-10 backdrop-blur-custom-1">
        <ContainerWrapper>
          <div className="flex items-center justify-between h-20">
            <div className="shrink-0 mr-4">
              <Link href="/" className="block" aria-label="Craft studio">
                <h3 className="h4 font-gradient-indigo-purple-pink " data-aos="fade-up">
                  Craft Studio
                </h3>
              </Link>
            </div>

            <nav className="hidden md:flex md:grow">
              <ul className="flex grow justify-end flex-wrap items-center">
                {headerElements.map((el) => (
                  <li key={el.name}>
                    <Link
                      href={el.href}
                      className="font-medium  px-4 py-3 flex items-center transition duration-150 ease-in-out"
                    >
                      {el.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </ContainerWrapper>
      </header>
      <MobileMenu />
    </>
  );
}
