import Image from "next/image";

function Hero() {
  return (
    <div className="mx-auto max-w-2xl py-12 sm:py-24 lg:py-14">
      <Image
        src="/bg.jpeg"
        height={900}
        width={900}
        alt="Grande fête du 1 er août à la Part-Dieu"
        className="object-cover"
      />
      <div className="text-center">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
          Grande fête du 1 er août à la Part-Dieu
        </h1>
        <hr className="w-full m-4" />
        <p className="mt-6 text-lg font-semibold leading-8 text-red-600">
          Organisé par la famille Chassot et amis
        </p>
      </div>
    </div>
  )
}

export default Hero
