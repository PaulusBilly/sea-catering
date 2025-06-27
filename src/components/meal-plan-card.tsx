import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import { mealPlans } from "@/data/mealPlans";

type MealPlan = (typeof mealPlans)[number];

export default function MealPlanCard({
  plan,
  onClick,
}: {
  plan: MealPlan;
  onClick: () => void;
}) {
  return (
    <Card
      onClick={onClick}
      className="cursor-pointer hover:shadow-lg transition"
    >
      <Image
        src={plan.img}
        alt={plan.name}
        width={400}
        height={250}
        className="rounded-t object-cover"
      />
      <CardHeader>
        <CardTitle>{plan.name}</CardTitle>
      </CardHeader>
      <CardContent className="text-sm">
        <p>{plan.desc}</p>
        <p className="font-semibold mt-2">Rp{plan.price.toLocaleString()}</p>
      </CardContent>
    </Card>
  );
}
