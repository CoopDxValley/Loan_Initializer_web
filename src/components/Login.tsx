import { useNavigate } from "react-router-dom";
import { useAuth } from "../../AuthProvider";
import { useState } from "react";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function Component() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate("/dashboard");
    login();
    console.log("Login attempted with:", email, password);
  };

  return (
    <div className="fixed inset-0 bg-background/80 backdrop-blur-sm">
      <div className="fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-8 shadow-lg duration-200 sm:rounded-lg">
        <div className="relative">
          <Button
            onClick={() => navigate("/")}
            variant="ghost"
            className="absolute right-0 top-0 h-8 w-8 p-0"
            aria-label="Close login form"
          >
            <X className="h-4 w-4" />
          </Button>
          <div className="text-center w-full">
            <h2 className="text-3xl font-bold">Welcome back</h2>
            <p className="text-xl text-muted-foreground mt-2">
              Glad to see you again{" "}
              <span role="img" aria-label="waving hand">
                👋
              </span>
            </p>
            <p className="text-lg text-muted-foreground mt-1">
              Login to your account below
            </p>
          </div>
        </div>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="enter email..."
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              // required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              type="password"
              placeholder="enter password..."
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              // required
            />
          </div>
          <Button type="submit" className="w-full text-lg py-6">
            Login
          </Button>
        </form>
        <div className="text-center text-muted-foreground text-sm">
          <span className="text-gray-600"> Don't have an account? </span>
          <span
            onClick={() => navigate("/signup")}
            className="text-primary hover:underline cursor-pointer"
          >
            Sign up for Free
          </span>
        </div>
      </div>
    </div>
  );
}
