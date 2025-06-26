import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const featureDetails = [
  {
    title: "Meal Customization",
    description: "Personalize every dish to match your dietary goals.",
  },
  {
    title: "Nationwide Delivery",
    description: "Fresh meals shipped to every major Indonesian city.",
  },
  {
    title: "Nutritional Info",
    description: "Transparent macros & calories info for concious eating.",
  },
];

export default function Features() {
  return (
    <section className="bg-muted/50 py-16">
      <div className="container">
        <h3 className="mb-10 text-center text-2xl font-bold">Why Choose Us?</h3>

        <div className="container gap-8 flex justify-center">
          {featureDetails.map((f) => (
            <Card
              key={f.title}
              className="transition-all hover:shadow-lg max-w-80 h-70"
            >
              <CardHeader>
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
