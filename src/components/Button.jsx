import React, { useState, useEffect } from 'react';

const Button = ({ 
  children, 
  onClick, 
  variant = 'primary', 
  size = 'md', 
  icon = null,
  iconPosition = 'left',
  disabled = false,
  fullWidth = false,
  className = '',
  loading = false
}) => {
  const [isPressed, setIsPressed] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  // Base styles
  const baseStyles = "relative inline-flex items-center justify-center rounded-md font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2";
  
  // Size variations
  const sizeStyles = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-6 py-3 text-lg"
  };
  
  // Variant styles
  const variantStyles = {
    primary: `bg-primary-600 text-white hover:bg-primary-700 active:bg-primary-800 focus:ring-primary-500 ${isPressed ? 'transform scale-95' : ''}`,
    secondary: `bg-gray-200 text-gray-800 hover:bg-gray-300 active:bg-gray-400 focus:ring-gray-500 ${isPressed ? 'transform scale-95' : ''}`,
    outline: `bg-transparent border border-primary-600 text-primary-600 hover:bg-primary-50 active:bg-primary-100 focus:ring-primary-500 ${isPressed ? 'transform scale-95' : ''}`,
    ghost: `bg-transparent text-primary-600 hover:bg-primary-50 active:bg-primary-100 focus:ring-primary-500 ${isPressed ? 'transform scale-95' : ''}`
  };
  
  // Disabled styles
  const disabledStyles = "opacity-60 cursor-not-allowed";
  
  // Width styles
  const widthStyles = fullWidth ? "w-full" : "";
  
  // Loading styles
  const loadingStyles = loading ? "relative text-transparent transition-none hover:text-transparent" : "";
  
  // Combine all styles
  const buttonStyles = `
    ${baseStyles} 
    ${sizeStyles[size]} 
    ${variantStyles[variant]} 
    ${disabled ? disabledStyles : ''} 
    ${widthStyles}
    ${loadingStyles}
    ${className}
  `;

  // Handle mouse events
  const handleMouseDown = () => {
    if (!disabled && !loading) setIsPressed(true);
  };
  
  const handleMouseUp = () => {
    if (!disabled && !loading) setIsPressed(false);
  };
  
  const handleMouseEnter = () => {
    if (!disabled && !loading) setIsHovered(true);
  };
  
  const handleMouseLeave = () => {
    if (!disabled && !loading) {
      setIsHovered(false);
      setIsPressed(false);
    }
  };

  // Clean up event listeners
  useEffect(() => {
    return () => {
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, []);

  return (
    <button
      className={buttonStyles}
      onClick={!disabled && !loading ? onClick : undefined}
      disabled={disabled || loading}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Loading spinner */}
      {loading && (
        <div className="absolute inset-0 flex items-center justify-center">
          <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
        </div>
      )}
      
      {/* Icon and content */}
      {iconPosition === 'left' && icon && <span className={`mr-2 ${loading ? 'opacity-0' : ''}`}>{icon}</span>}
      <span className={loading ? 'opacity-0' : ''}>{children}</span>
      {iconPosition === 'right' && icon && <span className={`ml-2 ${loading ? 'opacity-0' : ''}`}>{icon}</span>}
      
      {/* Ripple effect for primary and secondary variants */}
      {(variant === 'primary' || variant === 'secondary') && isPressed && !disabled && !loading && (
        <span className="absolute inset-0 rounded-md overflow-hidden">
          <span className="absolute inset-0 bg-white opacity-20 transform scale-0 origin-center animate-ping"></span>
        </span>
      )}
    </button>
  );
};

export default Button;
