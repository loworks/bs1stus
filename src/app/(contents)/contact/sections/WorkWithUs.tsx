"use client";

import { Buttons, SvgElements } from "@/components/Atoms";
import countries from "@/components/lib/countries";
import { useState, useRef } from "react";

export default function WorkWithUs({
  className,
  post,
  ...rest
}: {
  className?: string;
  post?: any;
} & React.ComponentProps<"div">) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    businessname: "",
    website: "",
    city: "",
    state: "",
    message: "",
    category: "",
    country: "",
  });

  const [status, setStatus] = useState(null);
  const formRef = useRef<HTMLFormElement>(null); // フォーム全体を参照

  const handleFocus = () => {
    if (formRef.current) {
      formRef.current.style.zIndex = "100"; // フォーカス時
    }
  };

  const handleBlur = () => {
    if (formRef.current) {
      formRef.current.style.zIndex = "0"; // フォーカスが外れたとき
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");

    const res = await fetch("/api/send-email", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    if (res.ok) {
      setStatus("success");
      setFormData({
        name: "",
        email: "",
        businessname: "",
        website: "",
        city: "",
        state: "",
        message: "",
        category: "",
        country: "",
      });
    } else {
      setStatus("error");
    }
  };

  return (
    <div className="max-md:mx-[16px] max-md:mt-[20px] max-md:space-y-12 md:mx-[25px] md:grid md:h-[100vh] md:min-h-[900px]">
      <div className="grid md:col-[1/-1] md:row-[1/-1] md:grid-cols-[repeat(24,1fr)] md:items-center">
        <form
          onSubmit={handleSubmit}
          onFocus={handleFocus} // フォーカス時
          onBlur={handleBlur} // フォーカス解除時
          ref={formRef} // フォームを参照
          className="relative md:col-[5/-5] [&>div]:mt-[-1px] [&__select]:border-[1px] [&__select]:border-[#000] [&__textarea]:border-[1px] [&_input]:rounded-none [&_input]:border-[1px] [&_input]:bg-[#fff] [&_select]:bg-[#fff] [&_textarea]:rounded-none [&_textarea]:bg-[#fff]"
        >
          <div className="md:flex">
            <div className="md:flex-1">
              <input
                type="text"
                id="name"
                placeholder="Name*"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 focus:border-black focus:outline-none max-md:h-[45px] md:h-[60px]"
              />
            </div>
            <div className="max-md:mt-[-1px] md:ml-[-1px] md:flex-1">
              <input
                type="email"
                placeholder="Email*"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 focus:border-black focus:outline-none max-md:h-[45px] md:h-[60px]"
              />
            </div>
          </div>
          <div className="md:flex">
            <div className="md:flex-1">
              <input
                type="text"
                id="businessname"
                placeholder="Business Name"
                name="businessname"
                value={formData.businessname}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 focus:border-black focus:outline-none max-md:h-[45px] md:h-[60px]"
              />
            </div>
            <div className="max-md:mt-[-1px] md:ml-[-1px] md:flex-1">
              <input
                type="text"
                placeholder="Website"
                id="website"
                name="website"
                value={formData.website}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 focus:border-black focus:outline-none max-md:h-[45px] md:h-[60px]"
              />
            </div>
          </div>{" "}
          <div className="md:flex">
            <div className="md:flex-1">
              <input
                type="text"
                id="city"
                placeholder="City"
                name="city"
                value={formData.city}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 focus:border-black focus:outline-none max-md:h-[45px] md:h-[60px]"
              />
            </div>
            <div className="max-md:mt-[-1px] md:ml-[-1px] md:flex-1">
              <input
                type="text"
                placeholder="State"
                id="state"
                name="state"
                value={formData.state}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 focus:border-black focus:outline-none max-md:h-[45px] md:h-[60px]"
              />
            </div>
          </div>
          <div className="relative">
            <select
              id="country"
              name="country"
              value={formData.country || ""}
              onChange={handleChange}
              required
              className={`w-full appearance-none px-3 py-2 focus:border-black focus:outline-none max-md:h-[45px] md:h-[60px] ${
                formData.country === "" ? "text-[#9ca3af]" : "text-black"
              }`}
            >
              <option value="" disabled hidden>
                Choose your country
              </option>
              {countries.map((country) => (
                <option key={country} value={country}>
                  {country}
                </option>
              ))}
            </select>

            <span className="absolute right-2 top-1/2 -translate-y-1/2 transform">
              <svg className="h-4 w-4">
                <path
                  d="M4 6L8 10L12 6"
                  stroke="currentColor"
                  strokeWidth={1}
                  fill="none"
                />
              </svg>
            </span>
          </div>
          <div>
            <textarea
              id="message"
              name="message"
              placeholder="Please input your message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={6}
              className="w-full px-3 py-2 focus:border-black focus:outline-none"
            ></textarea>
          </div>
          <Buttons.boxButton
            type="submit"
            className="font-und w-full leading-[60px] max-md:h-[45px] md:h-[60px]"
            disabled={status === "loading"}
          >
            {status === "loading" ? "Sending..." : "Submit"}
          </Buttons.boxButton>
          <div className="absolute left-[50%] top-[0%] z-[10000] translate-x-[-50%]">
            {status === "success" && (
              <p className="font-und-header mt-2 whitespace-nowrap text-[60px] uppercase text-black">
                Message sent successfully!
              </p>
            )}
            {status === "error" && (
              <p className="font-und-header mt-2 whitespace-nowrap text-[60px] uppercase text-red-600">
                Failed to send the message.
              </p>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}
