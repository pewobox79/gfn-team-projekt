import { useState } from "react";
import { Send } from "lucide-react";

type CallToActionProps = {
  title: string;
  placeholder?: string;
  buttonText?: string;
  bgColor?: string;
};

export default function CallToAction({
  title,
  placeholder = "your Email",
  buttonText = "Subscribe Now",
  bgColor = "bg-slate-800",
}: CallToActionProps) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "success">("idle");

  const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  function handleSubscribe() {
    setStatus("success");
    setEmail("");
  }

  return (
    <div className={`w-full rounded-2xl p-6 ${bgColor}`}>
      {/* Title */}
      <h2 className="text-white text-lg font-semibold">{title}</h2>

      {/* Input where to give your email + Button*/}
      <div className="flex w-full md:w-auto gap-2">

        <input
          type="email"
          placeholder={placeholder}
          className="flex-1 md:w-72
            rounded-lg px-4 py-2
            bg-white/10
            text-white placeholder-white/60
            outline-none focus:ring-2 focus:ring-white/40"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />

        {/* Button only looks enabled when email is valid */}
        <button
          className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition text-white whitespace-nowrap shrink-0
            ${isValid
                ? "bg-red-500 hover:bg-red-600"
                : "bg-red-500/60 cursor-not-allowed pointer-events-none"
                }
            `}
          onClick={handleSubscribe}
          disabled={!isValid}
        >
          <span>{buttonText}</span>
          <Send size={18} className="shrink-0" />
        </button>

        {status === "success" && (
          <p className="text-green-300 text-sm mt-2">Thanks for subscribing!</p>
        )}
      </div>
    </div>
  );
}
