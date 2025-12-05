import { LogoIcon } from '@/components/logo';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useState, useContext } from "react";
import { signup } from '../services/authService.js';
import { AuthContext } from "../context/AuthContext.jsx";
import { Link } from 'react-router-dom'; // Use react-router-dom in React, not Next.js Link

export default function SignupPage() {
  const { loginUser } = useContext(AuthContext);

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const result = await signup(form);
      loginUser(result);
      alert("Signup successful!");
    } catch (err) {
      if (err.response) {
        console.error("Error response:", err.response.data);
      } else if (err.request) {
        console.error("No response received:", err.request);
      } else {
        console.error("Error message:", err.message);
      }
      alert("Signup failed!");
    }
  }

  return (
    <section className="flex min-h-screen bg-zinc-50 px-4 py-16 md:py-32 dark:bg-transparent">
      <form
        onSubmit={handleSubmit}
        className="bg-muted m-auto h-fit w-full max-w-sm overflow-hidden rounded-[calc(var(--radius)+.125rem)] border shadow-md shadow-zinc-950/5 dark:[--color-muted:var(--color-zinc-900)]"
      >
        <div className="bg-card -m-px rounded-[calc(var(--radius)+.125rem)] border p-8 pb-6">
          <div className="text-center">
            <Link to="/" aria-label="go home" className="mx-auto block w-fit">
              <LogoIcon />
            </Link>
            <h1 className="mb-1 mt-4 text-xl font-semibold">Create a InsightHub account</h1>
            <p className="text-sm">Welcome! Create an account to get started</p>
          </div>

          <div className="mt-6 space-y-6">
            
              <div className="space-y-2">
                <Label htmlFor="name" className="block text-sm">Name</Label>
                <Input
                  type="text"
                  required
                  name="name"
                  id="name"
                  value={form.name}
                  onChange={handleChange}
                />
              </div>
            

            <div className="space-y-2">
              <Label htmlFor="email" className="block text-sm">Email</Label>
              <Input
                type="email"
                required
                name="email"
                id="email"
                value={form.email}
                onChange={handleChange}
              />
            </div>

            <div className="space-y-0.5">
              <div className="flex items-center justify-between">
                <Label htmlFor="password" className="text-sm">Password</Label>
                <Button asChild variant="link" size="sm">
                  <Link to="#" className="link intent-info variant-ghost text-sm">Forgot your Password?</Link>
                </Button>
              </div>
              <Input
                type="password"
                required
                name="password"
                id="password"
                value={form.password}
                onChange={handleChange}
                className="input sz-md variant-mixed"
              />
            </div>

            <Button type="submit" className="w-full">Sign Up</Button>
          </div>

          <div className="my-6 grid grid-cols-[1fr_auto_1fr] items-center gap-3">
            <hr className="border-dashed" />
            <span className="text-muted-foreground text-xs">Or continue With</span>
            <hr className="border-dashed" />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <Button type="button" variant="outline">
              {/* Google SVG */}
              <span>Google</span>
            </Button>
            <Button type="button" variant="outline">
              {/* Microsoft SVG */}
              <span>Microsoft</span>
            </Button>
          </div>
        </div>

        <div className="p-3">
          <p className="text-accent-foreground text-center text-sm">
            Have an account?
            <Button asChild variant="link" className="px-2">
              <Link to="#">Sign In</Link>
            </Button>
          </p>
        </div>
      </form>
    </section>
  );
}
