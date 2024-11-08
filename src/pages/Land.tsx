import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Check } from "lucide-react";
import LandingImage from "../assets/landing_image.svg?react";
import Header from "@/components/Header";
import { useNavigate } from "react-router-dom";

export default function Land() {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col min-h-screen mx-auto">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="container px-4 py-12 md:py-24 md:px-20">
          <div className="flex flex-row justify-around  items-center">
            <div className="space-y-4">
              <div className="text-sm font-medium uppercase tracking-wide text-primary">
                Personal loans
              </div>
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Personal loans to <br /> start almost anything.
              </h1>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button
                  onClick={() => navigate("/dashboard")}
                  size="lg"
                  className="bg-primary hover:bg-primary text-primary-foreground"
                >
                  Apply now
                </Button>
                <Button size="lg" variant="outline">
                  Get a quote
                </Button>
              </div>
            </div>
            <div className="lg:justify-self-end">
              <LandingImage className="hidden lg:block" />
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="container px-4 py-12 md:py-24 md:px-20 bg-muted/50">
          <h2 className="text-2xl font-bold text-center mb-12">
            Simple, 100% online
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
            <div className="space-y-2">
              <h3 className="text-xl font-bold">1. Get to know you</h3>
              <p className="text-muted-foreground">
                Tell us about your loan and provide us some details about
                yourself and your finances.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-bold">2. Get your quote</h3>
              <p className="text-muted-foreground">
                We provide you with your loan terms, your interest rate,
                borrowing limit, and repayments.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-bold">3. Get your money</h3>
              <p className="text-muted-foreground">
                Accept your loan terms and provide some final details.
              </p>
            </div>
          </div>
        </section>

        {/* What We Offer Section */}
        <section className="container px-4 py-12 md:py-24">
          <h2 className="text-2xl font-bold text-center mb-12">
            What we offer
          </h2>
          <div className="grid gap-8 md:grid-cols-3 mb-12">
            <div className="text-center">
              <div className="text-2xl font-bold mb-2">$2K - $70K</div>
              <div className="text-muted-foreground">Loan limits</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold mb-2">3, 5 or 7 years</div>
              <div className="text-muted-foreground">Loan terms</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold mb-2">$0</div>
              <div className="text-muted-foreground">Early repayment fee</div>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Check className="text-primary" />
                <span>You can get a 3, 5 or 7 year loan term¹</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="text-primary" />
                <span>Secured fixed rates from 9.89%* p.a to 21.49% p.a.</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="text-primary" />
                <span>
                  Unsecured fixed rates from 9.99% p.a. to 24.99% p.a.²
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="text-primary" />
                <span>Establishment fee of $150</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="text-primary" />
                <span>You can repay weekly, fortnightly or monthly</span>
              </div>
            </div>
          </div>
        </section>

        {/* Calculator Section */}
        <section className="container px-4 py-12 md:py-24 bg-muted/50">
          <h2 className="text-2xl font-bold text-center mb-4">
            Get a quick estimate
          </h2>
          <p className="text-center text-muted-foreground mb-8">
            Tell us about your loan and provide us some details about yourself
            and your finances.
          </p>
          <div className="flex justify-center">
            <Button
              onClick={() => navigate("/calculator")}
              size="lg"
              className="bg-primary text-primary-foreground"
            >
              Personal loan calculator
            </Button>
          </div>
        </section>

        {/* Types of Loans Section */}
        <section className="container px-4 py-12 md:py-24 md:px-20">
          <h2 className="text-2xl font-bold text-center mb-12">
            Types of personal loans
          </h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <Card key={i}>
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <svg
                      className=" text-primary w-6 h-6"
                      fill="none"
                      height="24"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M3 15v4c0 1.1.9 2 2 2h14a2 2 0 0 0 2-2v-4M17 8l-5-5-5 5M12 3v12" />
                    </svg>
                  </div>
                  <h3 className="font-bold mb-2">CAR LOANS</h3>
                  <p className="text-muted-foreground mb-4">
                    Got your eye on that new or used vehicle? Our auto loan can
                    help get you out on the road.
                  </p>
                  <Button variant="link" className="p-0 h-auto text-primary">
                    Find out more
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
