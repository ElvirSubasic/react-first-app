interface ButtonProps {
  children: string;
  color?:
    | "primary"
    | "secondary"
    | "success"
    | "danger"
    | "warning"
    | "info"
    | "light"
    | "dark";
  size?: "sm" | "md" | "lg";
  onClick?: () => void;
}

function Button({
  children,
  color = "primary",
  size = "md",
  onClick,
}: ButtonProps) {
  return (
    <button className={"btn btn-" + color + " btn-" + size} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
