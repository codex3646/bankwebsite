import { useState, useEffect } from "react";

export function Imageslider() {
  const images = [
    { src: "src/components/imgs1.jpg", title: "Espaço Família" },
    { src: "src/components/imgs2.jpg", title: "Cartão Black Ultravioleta" },
    { src: "src/components/imgs3.jpg", title: "Conta Global" },
    { src: "src/components/imgs4.jpg", title: "Investimentos" },
    { src: "src/components/imgs5.jpg", title: "Atendimento Ultravioleta" }
  ];

  const imagesPerSlide = 2;
  const totalSlides = Math.ceil(images.length / imagesPerSlide);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full max-w-4xl mx-auto mt-10 overflow-hidden">
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {Array.from({ length: totalSlides }).map((_, slideIndex) => (
          <div key={slideIndex} className="w-full flex-shrink-0 flex justify-around">
            {images
              .slice(slideIndex * imagesPerSlide, (slideIndex + 1) * imagesPerSlide)
              .map((image, index) => (
                <div key={index} className="relative w-1/2 p-2">
                  <img src={image.src} alt={image.title} className="w-full h-64 object-cover rounded-lg" />
                  <div className="absolute bottom-4 left-4 bg-neutral-900 bg-opacity-80 text-amber-100 p-2 rounded">
                    {image.title}
                  </div>
                </div>
              ))}
          </div>
        ))}
      </div>

      {/* Navigation Dots */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
        {Array.from({ length: totalSlides }).map((_, index) => (
          <div
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full cursor-pointer ${
              currentIndex === index ? "bg-amber-700" : "bg-neutral-400"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
}
