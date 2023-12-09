import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className=" min-h-[80vh] flex items-center justify-center">
      <div className="flex flex-col items-center gap-4 px-3 md:px-3">
        <h1 className="text-white text-center font-bold text-3xl md:text-7xl">
          Welcome To PortBack
        </h1>
        <p className="text-white text-lg w-full text-center tracking-widest md:w-3/4 md:text-xl">
          A portflio backend as a service . lets help improve your portfolio
          development experience
        </p>
        <Link
          href={"/skills"}
          className="bg-[#449f24] text-2xl font-bold tracking-wide rounded-lg px-5 py-3 text-white w-full md:w-fit text-center"
        >
          Explore
        </Link>
      </div>
    </div>
  );
}
