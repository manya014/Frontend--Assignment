import React, { useState } from "react";

export interface InputFieldProps {
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  label?: string;
  placeholder?: string;
  helperText?: string;
  errorMessage?: string;
  disabled?: boolean;
  invalid?: boolean;
  variant?: "filled" | "outlined" | "ghost";
  size?: "sm" | "md" | "lg";
  type?: "text" | "password";
}

const InputField: React.FC<InputFieldProps> = ({
  value,
  onChange,
  label,
  placeholder,
  helperText,
  errorMessage,
  disabled,
  invalid,
  variant = "outlined",
  size = "md",
  type = "text",
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const baseStyles = "w-full rounded-md focus:outline-none transition";
  const sizeStyles = {
    sm: "px-2 py-1 text-sm",
    md: "px-3 py-2 text-base",
    lg: "px-4 py-3 text-lg",
  };
  const variantStyles = {
    filled: "bg-gray-100 border border-transparent focus:ring-2 focus:ring-blue-400",
    outlined: "border border-gray-300 focus:ring-2 focus:ring-blue-400",
    ghost: "bg-transparent border-b border-gray-400 focus:border-blue-500",
  };

  return (
    <div className="flex flex-col space-y-1">
      {label && <label className="text-sm font-medium">{label}</label>}
      <div className="relative">
        <input
          type={type === "password" && showPassword ? "text" : type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          disabled={disabled}
          aria-invalid={invalid}
          className={`${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${
            invalid ? "border-red-500" : ""
          } ${disabled ? "bg-gray-200 cursor-not-allowed" : ""}`}
        />
        {type === "password" && (
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute inset-y-0 right-2 text-sm text-gray-500"
          >
            {showPassword ? "Hide" : "Show"}
          </button>
        )}
      </div>
      {invalid && errorMessage ? (
        <span className="text-red-500 text-xs">{errorMessage}</span>
      ) : (
        helperText && <span className="text-gray-500 text-xs">{helperText}</span>
      )}
    </div>
  );
};

export default InputField;
