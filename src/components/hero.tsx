import Image from "next/image";

export default function Hero() {
  return (
    <section className="flex flex-col-reverse md:flex-row items-stretch md:min-h-[600px]">
      <div className="ml-30 flex-1 flex flex-col items-center justify-center md:items-start px-6 py-12 text-[#242424]">
        <h2 className=" mb-6 text-5xl md:text-6xl font-extrabold max-w-md text-center md:text-left">
          Healthy Meals Anytime Anywhere
        </h2>
        <p className="max-w-md text-lg text-center md:text-left">
          SEA Catering delivers fresh, customizable meal plans straight to your
          doorstep anywhere in Indonesia
        </p>
      </div>

      <div className="relative flex-[0_0_60%] min-h-[350px]">
        <Image
          src="/food.png"
          alt="food image"
          fill
          priority
          sizes="(min-width: 768px) 60vw, 100vw"
          className="object-cover"
        />
      </div>
    </section>
  );
}
