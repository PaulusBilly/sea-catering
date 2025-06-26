import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";

const featureDetails = [
  {
    img: "/meal.jpg",
    title: "Meal Customization",
    description: "Personalize every dish to match your dietary goals.",
  },
  {
    img: "/cater.jpg",
    title: "Nationwide Delivery",
    description: "Fresh meals shipped to every major Indonesian city.",
  },
  {
    img: "/nutrition.jpg",
    title: "Nutritional Info",
    description: "Transparent macros & calories info for concious eating.",
  },
];

export default function Features() {
  return (
    <section className="flex justify-center">
      <div className="container">
        <h3 className="mb-10 text-center text-2xl font-bold">Why Choose Us?</h3>

        <div className="container gap-8 flex justify-center">
          {featureDetails.map((f) => (
            <Card
              key={f.title}
              className="transition-all hover:shadow-lg max-w-80 h-80"
            >
              <CardHeader className="flex flex-col items-center">
                <div className="relative w-full h-40 mb-4">
                  <Image
                    src={f.img}
                    alt={f.title}
                    fill
                    sizes="(max-width: 768px) 80vw, 320px"
                    className="object-cover object center rounded-sm"
                  />
                </div>
                <CardTitle>{f.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">
                {f.description}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
