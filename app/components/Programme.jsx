const timeline = [
  {
    title: "Ouverture des bars dès 18h",
    time: "18.00",
  },
  {
    title: "Stand de soupe de chalet, gâteaux et saucisses",
    time: "19.30",
  },
  {
    title: "Allocution de Didier Castella (conseiller d'État)",
    time: "21.00",
  },

  {
    title: "Allumage du grand Feu",
    time: "21.30",
  },
  {
    title: "Cortège de sonneurs de cloche de la Part-Dieu",
    time: "22.00",
  },
  {
    title: "Feu d'artifice",
    time: "23.00",
  },
  {
    title: "Animation musicale",
    time: "Toute la soirée",
  },
];

export default function Programme() {
  return (
    <div className=" py-6  mx-auto max-w-5xl px-6 lg:px-8 relative">
      <h4 className="  font-bold text-2xl  my-4 text-red-600">Programme:</h4>
      <div className=" lg:flex gap-8">
        <div className="bg-hero-pattern2  bg-no-repeat bg-contain w-96 h-64 lg:w-1/2 hidden lg:block"></div>
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-8 overflow-hidden lg:mx-0 lg:max-w-none lg:grid-cols-4">
          {timeline.map((item) => (
            <div key={item.title}>
              <time
                dateTime={item.time}
                className="flex items-center text-sm font-semibold leading-6 text-red-600"
              >
                <svg
                  viewBox="0 0 4 4"
                  className="mr-4 h-1 w-1 flex-none"
                  aria-hidden="true"
                >
                  <circle cx={2} cy={2} r={2} fill="currentColor" />
                </svg>
                {item.time}
                <div
                  className="absolute -ml-2 h-px w-screen -translate-x-full bg-gray-900/10 sm:-ml-4 lg:static lg:-mr-6 lg:ml-8 lg:w-auto lg:flex-auto lg:translate-x-0"
                  aria-hidden="true"
                />
              </time>
              <p className="mt-6 text-lg font-semibold leading-8 tracking-tight text-gray-900">
                {item.title}
              </p>
              <hr className="w-full m-4 md:hidden block" />

            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
