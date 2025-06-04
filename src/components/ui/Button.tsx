interface ButtonProps {
  text?: string;
  onClick?: () => void;
  className?: string;
}
export const Button = ({
  text = "Hire me",
  onClick,
  className = "",
}: ButtonProps) => {
  return (
    <div className={`btn-gradient-border ${className}`}>
      <button onClick={onClick} className="inner">
        {text}
      </button>
    </div>
  );
};
