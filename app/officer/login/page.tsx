"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function OfficerLogin() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function login(e: React.FormEvent) {
    e.preventDefault();

    // Temporary Hackathon Login
    if (
      email === "officer@nagriknetra.ai" &&
      password === "admin123"
    ) {
      router.push("/dashboard");
      return;
    }

    alert("Invalid credentials");
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-green-50 to-gray-100 flex items-center justify-center px-6">

      <div className="bg-white rounded-3xl shadow-2xl p-10 w-full max-w-md">

        <h1 className="text-3xl font-bold text-green-700 text-center">
          Officer Login
        </h1>

        <p className="text-gray-500 text-center mt-2">
          Municipal Command Center
        </p>

        <form
          onSubmit={login}
          className="mt-8 space-y-5"
        >

          <input
            type="email"
            placeholder="Officer Email"
            value={email}
            onChange={(e) =>
              setEmail(e.target.value)
            }
            className="w-full border rounded-xl p-3"
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) =>
              setPassword(e.target.value)
            }
            className="w-full border rounded-xl p-3"
          />

          <button
            className="w-full bg-green-600 text-white rounded-xl py-3 hover:bg-green-700 transition"
          >
            Login
          </button>

        </form>

        <div className="mt-8 text-center">

          <Link
            href="/officer"
            className="text-green-700"
          >
            ← Back
          </Link>

        </div>

        <div className="mt-8 bg-gray-100 rounded-xl p-4 text-sm">

          <p className="font-semibold">
            Demo Credentials
          </p>

          <p>Email:</p>

          <code>
            officer@nagriknetra.ai
          </code>

          <p className="mt-2">
            Password:
          </p>

          <code>
            admin123
          </code>

        </div>

      </div>

    </main>
  );
}