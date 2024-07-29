const photos = [
  {
    name: "Grand feu de la Part-Dieu",
    imageUrl: "./festimg/fire.jpg",
  },
  {
    name: "Soupe de Châlet maison",
    imageUrl: "./festimg/supe.jpg",
  },

  {
    name: "Feu durant la nuit avec musique",
    imageUrl: "./festimg/fire-night.jpg",
  },
];

export default function ImagesTable() {
  return (
    <div className=" py-8 relative ">
      <div className="mx-auto max-w-5xl px-6 lg:px-8 ">
        <h4 className=" font-bold text-2xl  my-4 text-red-600">Nos photos:</h4>
        <ul
          role="list"
          className="mx-auto text-red-600 grid md:list-disc  max-w-2xl grid-cols-1 gap-x-4 gap-y-6 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3"
        >
          {photos.map((photo) => (
            <li key={photo.name}>
              <img
                className="aspect-[3/4] w-full rounded-2xl object-cover"
                src={photo.imageUrl}
                alt={photo.name}
              />
              <h3
                className="mt-1 p-2 text-sm 
                leading-8 tracking-tight text-gray-900"
              >
                {photo.name}
              </h3>
            </li>
          ))}
        </ul>
   
      </div>
    </div>
  );
}
