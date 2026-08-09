"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

const NEW_DOMAIN = "https://evergreentools.online";

/**
 * Global error boundary handler.
 *
 * Catches runtime errors as well as explicit error status codes
 * (e.g. 410 Gone, 500 Internal Server Error) and permanently redirects
 * the visitor to the same path on the new domain.
 */
export default function Error({ error, reset }) {
  const pathname = usePathname();

  useEffect(() => {
    // Log the error to the console for debugging.
    console.error(error);
  }, [error]);

  useEffect(() => {
    const target = `${NEW_DOMAIN}${pathname || ""}`;
    window.location.replace(target);
  }, [pathname]);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-white p-8 text-center dark:bg-black">
      <p className="text-5xl font-bold text-primary">Oops</p>
      <h1 className="mt-4 text-2xl font-semibold">Something went wrong</h1>
      <p className="mt-2 text-gray-600 dark:text-gray-300">
        Redirecting you to{" "}
        <a href={`${NEW_DOMAIN}${pathname || ""}`}>evergreentools.online</a> ...
      </p>
    </main>
  );
}
