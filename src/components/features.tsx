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
    <section>
      <div>
        <h3>Why Choose Us?</h3>

        <div>
          {featureDetails.map((f) => (
            <Card key={f.title}>
              <CardHeader>
                <CardTitle>{f.title}</CardTitle>
              </CardHeader>
              <CardContent>{f.description}</CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
