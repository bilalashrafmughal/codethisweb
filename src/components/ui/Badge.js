"use client";

export default function Badge({
  children,
  variant = "primary",
  className = "",
}) {
  const variants = {
    primary: "bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300",
    secondary:
      "bg-gray-100 dark:bg-gray-700/50 text-gray-700 dark:text-gray-300",
    accent:
      "bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300",
    success:
      "bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300",
  };

  return (
    <span
      className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${variants[variant]} ${className}`}
    >
      {children}
    </span>
  );
}
