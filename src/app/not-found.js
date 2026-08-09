"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

const NEW_DOMAIN = "https://evergreentools.online";

/**
 * 404 (Not Found) handler.
 *
 * When a visitor hits a page on this site that no longer exists (404),
 * the same path is preserved and we permanently (301) redirect them to
 * the new domain so old bookmarks / backlinks keep working.
 *
 * e.g. codethisweb.com/calendar-generator  ->  evergreentools.online/calendar-generator
 */
export default function NotFound() {
  const pathname = usePathname();

  useEffect(() => {
    const target = `${NEW_DOMAIN}${pathname || ""}`;

    // Perform a 301-style permanent redirect. Using location.replace keeps the
    // users history clean and is treated as a permanent redirect by browsers.
    window.location.replace(target);
  }, [pathname]);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-white p-8 text-center dark:bg-black">
      <p className="text-5xl font-bold text-primary">404</p>
      <h1 className="mt-4 text-2xl font-semibold">Page Not Found</h1>
      <p className="mt-2 text-gray-600 dark:text-gray-300">
        This page has moved. Redirecting you to{" "}
        <a href={`${NEW_DOMAIN}${pathname || ""}`}>evergreentools.online</a> ...
      </p>
    </main>
  );
}
