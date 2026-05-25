import React from "react";
import { Helmet } from "react-helmet-async";
import Sidebar from "./components/Sidebar";
import Main from "./components/Main";

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Sky Now</title>
      </Helmet>

      <main className="flex flex-col lg:flex-row bg-[#000] min-h-screen w-full px-4 sm:px-8 lg:px-12 pt-7 gap-4">
        {/* Sidebar */}
        <aside className="w-full lg:w-80">
          <Sidebar />
        </aside>

        {/* Content */}
        <section className="flex-1">
         <Main />
        </section>
      </main>
    </>
  );
}
