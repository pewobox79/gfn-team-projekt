import { useState } from "react";
import { Send } from "lucide-react";

type Button = {
  label: string;
  bgColor: string;
  hasBorderRadius: boolean;
  hasIcon: boolean;
};

type CallToActionProps = {
  title: string;
  bgColor: string;
  button: Button;
};

export default function CallToAction({
  title,
  bgColor,
  button,
}: CallToActionProps) {
  const [email, setEmail] = useState("");

  const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  return (
    <section
      className={`w-full rounded-2xl px-8 py-6 flex flex-col md:flex-row items-center justify-between gap-6 ${bgColor}`}
    >
      {/* LEFT SIDE */}
      <h2 className="text-white text-2xl font-semibold">
        {title}
      </h2>

      {/* RIGHT SIDE */}
      <div className="flex items-center gap-3 w-full md:w-auto">
        <input
          type="email"
          placeholder="Your Email"
          className="
            flex-1 md:w-80
            bg-transparent
            border-b border-white/40
            text-white placeholder-white/60
            outline-none
            py-2
          "
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <button
          disabled={!isValid}
          className={`
            flex items-center gap-2 px-6 py-3
            text-white font-medium transition
            ${button.bgColor}
            ${button.hasBorderRadius ? "rounded-lg" : ""}
            ${
              !isValid
                ? "opacity-60 cursor-not-allowed"
                : "hover:brightness-110"
            }
          `}
        >
          {button.label}
          {button.hasIcon && <Send size={18} />}
        </button>
      </div>
    </section>
  );
}