function Button({ click, children }) {
  return (
    <button onClick={click} className="button">
      {children}
    </button>
  );
}

export default Button;
