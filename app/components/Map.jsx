function GoogleMap() {
  return (
    <div className=" max-w-5xl mx-auto z-10 mt-4 p-4 relative">
            <h4 className=" font-bold text-2xl  my-4 text-red-600">Lieu:</h4>

      <div className=" lg:flex gap-8">
        <div>
          <div className="bg-hero-pattern  bg-no-repeat bg-contain h-64 lg:w-3/4"></div>
         
          <p className="mt-2 text-md  leading-6 text-gray-700">
            La manifestation se situe 300 mètres après la buvette de la Chia à
            Bulle.
          </p>
        </div>
        <iframe
        
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1696.0141326873602!2d7.01916153452322!3d46.593607944703535!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x478e88147cc6b6e5%3A0x160796c661de7168!2sGrange-Neuve%20200%2C%201635%20La%20Tour-de-Tr%C3%AAme!5e1!3m2!1sfr!2sch!4v1722258694908!5m2!1sfr!2sch"
          width="100%"
          height="400"
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
}

export default GoogleMap;
