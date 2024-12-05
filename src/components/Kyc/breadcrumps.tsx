import { Check } from "lucide-react";

interface BreadcrumbsProps {
  currentStep: number;
  totalSteps: number;
  onStepClick: (step: number) => void;
}

export function Breadcrumbs({
  currentStep,
  totalSteps,
  onStepClick,
}: BreadcrumbsProps) {
  const steps = [
    "Personal Info",
    "Address",
    "Identification",
    "Employment",
    "Financial",
  ];

  return (
    <nav aria-label="Progress" className="mb-8">
      <ol role="list" className="space-y-4 md:flex md:space-y-0 md:space-x-8">
        {steps.map((step, index) => (
          <li key={step} className="md:flex-1">
            <button
              onClick={(event: React.MouseEvent<HTMLButtonElement>) => {
                event.preventDefault();
                onStepClick(index + 1);
              }}
              disabled={index + 1 > currentStep}
              className={`group flex w-full flex-col border-l-4 py-2 pl-4 transition-colors md:border-l-0 md:border-t-4 md:pl-0 md:pt-4 md:pb-0 ${
                index + 1 <= currentStep
                  ? "border-primary hover:border-primary/80"
                  : "border-gray-200 hover:border-gray-300"
              }`}
            >
              <span className="text-sm font-medium text-primary">
                Step {index + 1}
              </span>
              <span className="text-sm font-medium">{step}</span>
              {index + 1 < currentStep && (
                <Check className="ml-2 h-4 w-4 text-primary" />
              )}
            </button>
          </li>
        ))}
      </ol>
    </nav>
  );
}
