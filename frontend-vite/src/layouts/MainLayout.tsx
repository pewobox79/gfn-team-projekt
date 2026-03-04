import { Outlet } from "react-router-dom";

import Footer from "@/components/footer/Footer";

export default function MainLayout() {
  return (
    <div className="min-h-screen flex flex-col max-w-[1600px] m-auto">
      <main className="w-full p-0 m-0  ">
        <Outlet />
      </main>
      <Footer />

    </div>
  );
}