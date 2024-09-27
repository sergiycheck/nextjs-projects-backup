import Link from "next/link";
import { GithubSvg, InstagramSvg, LinkedInSvg, MetaSvg, WrappedSvgLink, XTwitterSvg } from "../common/svgs";
import { projects } from "../../api/projects";
import { ContainerWrapper } from "../common/container-wrapper";

export default function Footer() {
  return (
    <footer>
      <ContainerWrapper className="py-12 md:py-16">
        {/* Top area: Blocks */}
        <div className="grid md:grid-cols-12 gap-8 lg:gap-20 mb-8 md:mb-12">
          {/* 1st block */}
          <div className="md:col-span-4 lg:col-span-5">
            <div className="flex gap-2">
              {/* Logo */}
              <Link href="/" aria-label="Craft studio">
                <p className="text-lg font-gradient-indigo-purple-pink w-fit ">Craft Studio</p>
              </Link>
            </div>
          </div>

          {/* 2nd, 3rd and 4th blocks */}
          <div className="md:col-span-8 lg:col-span-7 grid grid-cols-2 gap-4">
            {/*  block */}
            <div className="flex sm:justify-end">
              <div className="text-sm w-fit">
                <h6 className="text-gray-200 font-medium mb-1">Case studies</h6>
                <ul>
                  {projects.map((project) => (
                    <li className="mb-1" key={project.id}>
                      <Link
                        href={`/projects/${project.id}`}
                        scroll={false}
                        className="text-gray-400 hover:text-gray-100 transition duration-150 ease-in-out"
                      >
                        {project.project}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/*  block */}
            <div className="flex sm:justify-end">
              <div className="text-sm w-fit">
                <h6 className="text-gray-200 font-medium mb-1">Resources</h6>
                <ul>
                  <li className="mb-1">
                    <Link
                      href="/privacy-policy"
                      className="text-gray-400 hover:text-gray-100 transition duration-150 ease-in-out"
                    >
                      Privacy Policy
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom area */}
        <div className="sm:flex sm:items-center sm:justify-between ">
          {/* Social links */}
          <ul className="flex justify-center items-center sm:order-1 gap-2 mb-4">
            <li className="w-fit">
              <WrappedSvgLink href="/" ariaLabel="Twitter">
                <XTwitterSvg />
              </WrappedSvgLink>
            </li>
            <li className="w-fit">
              <WrappedSvgLink href="/" ariaLabel="Twitter">
                <GithubSvg />
              </WrappedSvgLink>
            </li>
            <li className="w-fit">
              <WrappedSvgLink href="/" ariaLabel="Twitter">
                <MetaSvg />
              </WrappedSvgLink>
            </li>
            <li className="w-fit">
              <WrappedSvgLink href="/" ariaLabel="Twitter">
                <InstagramSvg />
              </WrappedSvgLink>
            </li>
            <li className="w-fit">
              <WrappedSvgLink href="/" ariaLabel="Twitter">
                <LinkedInSvg />
              </WrappedSvgLink>
            </li>
          </ul>

          {/* Copyrights note */}
          <div className="text-gray-400 text-sm mr-4">
            &copy; {new Date().getFullYear()} CraftStudio.com. All rights reserved.
          </div>
        </div>
      </ContainerWrapper>
    </footer>
  );
}
