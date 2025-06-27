import Image from "next/image";

export default function Hero() {
  return (
    <section className="flex flex-col-reverse md:flex-row items-center md:items-stretch md:min-h-[600px]">
      {/* TEXT – will come after image on phones, before image on desktop */}
      <div className="flex-1 flex flex-col max-w-150 md:ml-30 justify-center px-6 py-10 text-center md:text-left mx-auto md:mx-0">
        <h2 className="mb-4 text-3xl md:text-5xl font-extrabold">
          Healthy Meals Anytime Anywhere
        </h2>
        <p className="max-w-md">
          SEA Catering delivers fresh, customizable meal plans straight to your
          doorstep anywhere in Indonesia.
        </p>
      </div>

      {/* IMAGE */}
      <div className="relative w-150 max-w-150 h-100 md:flex-[0_0_60%] md:h-auto">
        <Image
          src="/food.png"
          alt="Assorted healthy meals"
          fill
          priority
          sizes="(max-width:768px) 80vw, 60vw"
          className="object-cover object-center rounded-lg"
        />
      </div>
    </section>
  );
}
