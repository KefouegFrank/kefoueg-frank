"use client";

import { useState } from "react";
import Loader from "@/components/layout/Loader";
import Navbar from "@/components/layout/Navbar";

export default function RootLayoutClient({
  children,
}: {
  children: React.ReactNode;
}) {
  const [loading, setLoading] = useState(true);

  return (
    <>
      {loading && <Loader onComplete={() => setLoading(false)} />}
      {!loading && (
        <>
          <Navbar />
          {children}
        </>
      )}
    </>
  );
}
