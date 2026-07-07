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

    // Demo Login
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
    <main
      className="
        min-h-screen
        flex
        items-center
        justify-center
        px-6
        bg-gradient-to-br
        from-green-50
        via-white
        to-slate-100
        dark:from-slate-950
        dark:via-slate-900
        dark:to-slate-950
        transition-colors
        duration-300
      "
    >
      <div
        className="
          w-full
          max-w-md
          rounded-3xl
          border
          border-gray-200
          dark:border-slate-700
          bg-white
          dark:bg-slate-900
          shadow-2xl
          p-10
        "
      >
        {/* Logo */}

        <div className="flex justify-center mb-6">
          <img
            src="/logo.svg"
            alt="NagrikNetra AI"
            className="h-16 w-16"
          />
        </div>

        {/* Heading */}

        <h1 className="text-3xl font-bold text-center text-green-700 dark:text-green-400">
          Officer Login
        </h1>

        <p className="text-center text-gray-600 dark:text-gray-400 mt-3">
          Municipal Environmental Command Center
        </p>

        {/* Login Form */}

        <form
          onSubmit={login}
          className="mt-8 space-y-5"
        >
          <input
            type="email"
            placeholder="Officer Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="
              w-full
              rounded-xl
              border
              border-gray-300
              dark:border-slate-600
              bg-white
              dark:bg-slate-800
              text-gray-900
              dark:text-white
              p-3
              outline-none
              focus:ring-2
              focus:ring-green-500
            "
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="
              w-full
              rounded-xl
              border
              border-gray-300
              dark:border-slate-600
              bg-white
              dark:bg-slate-800
              text-gray-900
              dark:text-white
              p-3
              outline-none
              focus:ring-2
              focus:ring-green-500
            "
          />

          <button
            type="submit"
            className="
              w-full
              rounded-xl
              bg-green-600
              hover:bg-green-700
              text-white
              py-3
              font-semibold
              shadow-lg
              hover:shadow-xl
              transition-all
              duration-300
            "
          >
            Login to Dashboard
          </button>
        </form>

        {/* Back Button */}

        <div className="mt-8 text-center">
          <Link
            href="/"
            className="text-green-700 dark:text-green-400 hover:underline"
          >
            ← Back to Home
          </Link>
        </div>

        {/* Demo Credentials */}

        <div
          className="
            mt-8
            rounded-2xl
            border
            border-gray-200
            dark:border-slate-700
            bg-gray-50
            dark:bg-slate-800
            p-5
          "
        >
          <h3 className="font-bold text-gray-900 dark:text-white mb-4">
            Demo Credentials
          </h3>

          <div className="space-y-3 text-sm">

            <div>
              <p className="text-gray-600 dark:text-gray-400">
                Email
              </p>

              <code
                className="
                  block
                  mt-1
                  rounded-lg
                  bg-white
                  dark:bg-slate-900
                  border
                  border-gray-200
                  dark:border-slate-700
                  p-2
                "
              >
                officer@nagriknetra.ai
              </code>
            </div>

            <div>
              <p className="text-gray-600 dark:text-gray-400">
                Password
              </p>

              <code
                className="
                  block
                  mt-1
                  rounded-lg
                  bg-white
                  dark:bg-slate-900
                  border
                  border-gray-200
                  dark:border-slate-700
                  p-2
                "
              >
                admin123
              </code>
            </div>

          </div>
        </div>

      </div>
    </main>
  );
}