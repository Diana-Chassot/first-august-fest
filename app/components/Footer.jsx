import Link from "next/link";

function Footer() {
  return (
    <div className=" mt-12  ">
      <hr className="w-full m-4" />

      <div className="max-w-5xl mx-auto  py-2 px-2">
   
        <div>
          <div className="text-gray-900  relative">
            <div className="text-xs leading-5">
              <span>&copy;2024 </span>
              <Link href="/" className="hover:underline text-red-600 font-bold">
                <span>Grande fête du 1er août à la Part-Dieu.</span>
              </Link>
              <span> All rights reserved.</span>
            </div>

            <div className="mt-1 flex gap-1 text-xs  leading-5 ">
              <span> Built by </span>
              <a
                href={`https://swissweb-development.ch`}
                className="underline  hover:text-red-600"
              >
                <span>SwissWeb Development</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
