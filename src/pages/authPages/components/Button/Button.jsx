function Button({ Content, onClick, className }) {
  return (
    <button
      onClick={onClick}
      className={`bg-gradient-to-r from-[#2d6aed] to-[#9234eb] text-white px-4 py-2 rounded-xl  active:scale-95 transition-transform duration-200 ${className}`}
    >
      {Content}
    </button>
  );
}

export default Button;
