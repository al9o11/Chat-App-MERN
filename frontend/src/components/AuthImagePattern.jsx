const AuthImagePattern = ({ title, subtitle, images = [] }) => {
  return (
    <div className="hidden lg:flex items-center justify-center bg-base-200 p-12">
      <div className="max-w-md text-center">
        <div className="grid grid-cols-3 gap-3 mb-8">
          {images.map((image, i) => (
            <div
              key={i}
              className={`aspect-square rounded-2xl overflow-hidden ${
                i % 2 === 0 ? "animate-pulse" : ""
              }`}
            >
              <img
                src={image}
                alt={`Grid item ${i + 1}`}
                className="object-cover w-full h-full"
              />
            </div>
          ))}
        </div>
        <h2 className="text-2xl font-bold mb-4">{title}</h2>
        <p className="text-base-content/60">{subtitle}</p>
      </div>
    </div>
  );
};

export default AuthImagePattern;
