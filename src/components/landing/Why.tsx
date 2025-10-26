import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { WHY_TEXT } from "@/utils/constants";

export default function Why() {
  return (
    <div>
      <Card className="border-0 shadow-none">
        <CardHeader className="text-center">
          <CardTitle className="text-3xl font-bold text-neutral-800 md:text-[33px]">
            Why Choose TicketFlow?
          </CardTitle>
          <CardDescription className="text-lg text-neutral-700 mt-2">
            Everything you need to manage tickets efficiently and effectively.
          </CardDescription>
        </CardHeader>

        <CardContent className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {WHY_TEXT.map((text, idx) => (
            <Card key={idx}>
              <CardHeader>
                <div
                  className={`h-12 w-12 rounded-lg bg-status-open flex items-center justify-center ${text.color} mb-4`}
                >
                  <text.logo className="h-6 w-6 text-white" />
                </div>

                <CardTitle className="text-xl font-semibold text-neutral-800 ">
                  {text.title}
                </CardTitle>
                <CardDescription className="text-neutral-600 mt-2 text-base">
                  {text.description}
                </CardDescription>
              </CardHeader>
            </Card>
          ))}
        </CardContent>
      </Card>
    </div>
  );
}
