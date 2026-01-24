import clsx from "clsx";

const variants = {
  default: "bg-blue-600 text-white hover:bg-blue-700",
  secondary: "bg-gray-200 text-gray-800 hover:bg-gray-300",
  danger: "bg-red-600 text-white hover:bg-red-700",
  ghost: "text-gray-500 hover:text-gray-700",
  icon: "text-gray-400 hover:text-blue-500",
};

const sizes = {
  sm: "text-sm px-3 py-1.5",
  md: "text-base px-4 py-2",
  lg: "text-lg px-5 py-3",
  icon: "w-7 h-7 p-2",
};

const Button = ({
  type = "button",
  onClick,
  variant = "",
  size = "md",
  disabled = false,
  fullWidth = false,
  icon: Icon = null,
  iconBox = "4px",
  children,
  className = "",
  ...rest
}) => {
  const base =
    "inline-flex items-center justify-center gap-1 rounded-md font-medium transition";
  const disabledClass = disabled ? "opacity-50 cursor-not-allowed" : "";
  const widthClass = fullWidth ? "w-full" : "";

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={clsx(
        base,
        variants[variant],
        sizes[size],
        widthClass,
        disabledClass,
        className
      )}
      {...rest}
    >
      {Icon && (
        <Icon className={clsx(`w-[${iconBox}] h-[${iconBox}]`, "shrink-0")} />
      )}
      {children}
    </button>
  );
};

export default Button;
