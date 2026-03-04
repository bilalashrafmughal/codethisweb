"use client";

export default function Button({
  children,
  variant = "primary",
  size = "md",
  className = "",
  ...props
}) {
  const baseStyles =
    "font-semibold rounded-lg transition-all duration-300 inline-flex items-center justify-center gap-2";

  const variants = {
    primary:
      "bg-blue-600 text-white hover:bg-blue-700 shadow-lg hover:shadow-xl hover:scale-105",
    secondary:
      "bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white hover:bg-gray-300 dark:hover:bg-gray-600",
    outline:
      "border-2 border-blue-600 text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
