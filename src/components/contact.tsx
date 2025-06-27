import Image from "next/image";

export default function Contact() {
  return (
    <section id="contact" className="py-16 flex justify-center">
      <div className="container max-w-100 text-center py-2">
        <h3 className="mb-4 text-2xl font-bold">Contact Us</h3>
        <div className="mb-4 flex gap-3">
          <Image src="/manager.svg" alt="manager icon" width="24" height="24" />
          <p>Brian</p>
        </div>
        <div className="mb-4 flex gap-3">
          <Image src="/phone.svg" alt="phone icon" width="24" height="24" />
          <a href="tel:08123456789">081234556789</a>
        </div>
      </div>
    </section>
  );
}
