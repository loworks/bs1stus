"use client";

import { useState } from "react";
import { Buttons } from "../Atoms";

export default function NewsletterForm({
  className,
  ...rest
}: {
  className?: string;
} & React.ComponentProps<"div">) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");

  const validateEmail = (email) => {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name) {
      setError("Please enter your name");
      return;
    }

    if (!email) {
      setError("Please enter an email address");
      return;
    }

    if (!validateEmail(email)) {
      setError("Please enter a valid email address");
      return;
    }

    setError("");

    try {
      const response = await fetch("/api/create-customer", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email }),
      });

      const result = await response.json();

      if (response.ok) {
        setIsSubmitted(true);
      } else {
        setError(result.error || "Failed to create customer");
      }
    } catch (error) {
      setError("Error: Unable to connect to the server");
    }
  };

  return (
    <div className={`${className}`} {...rest}>
      <div className="space-y-2">
        <h2 className="font-ob-nar-b text-[22px] uppercase">
          Newsletter Signup
        </h2>

        {!isSubmitted ? (
          <form onSubmit={handleSubmit} className="space-y-2">
            <div className="flex">
              <input
                type="text"
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full rounded-none border p-3 focus:outline-none"
              />
              <input
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full rounded-none border border-l-[0px] p-3 focus:outline-none"
              />{" "}
            </div>
            {error && <p className="text-xs text-red-500">{error}</p>}
            <Buttons.boxButton className="w-full">Sign Up</Buttons.boxButton>
          </form>
        ) : (
          <p className="text-center text-green-500">Registration successful!</p>
        )}
      </div>
    </div>
  );
}
