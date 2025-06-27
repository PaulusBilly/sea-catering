"use client";
import * as Dialog from "@radix-ui/react-dialog";
import { mealPlans } from "@/data/mealPlans";

type MealPlan = (typeof mealPlans)[number];

export default function PlanDetailsModal({
  plan,
  onClose,
}: {
  plan: MealPlan | null;
  onClose: () => void;
}) {
  return (
    <Dialog.Root open={!!plan} onOpenChange={(open) => !open && onClose()}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/40" />
        <Dialog.Content className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[90vw] max-w-lg rounded bg-white p-6">
          {plan && (
            <>
              <Dialog.Title className="text-xl font-bold mb-4">
                {plan.name}
              </Dialog.Title>
              <p className="mb-3">{plan.details}</p>
              <p className="font-semibold mb-6">
                Rp{plan.price.toLocaleString()} / meal
              </p>
            </>
          )}
          <Dialog.Close className="px-4 py-2 bg-primary text-white rounded">
            Close
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
