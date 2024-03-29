function Button({ onClick, type, children, icon }) {
  const base =
    "text-almarai px-6 py-3.5 text-base font-medium text-white inline-flex items-center bg-primary-blue hover:bg-blue-800 rounded text-center inline-block";

  const styles = {
    base: base,
  };

  if (onClick)
    return (
      <button onClick={onClick} className={styles[type]}>
        {children}
      </button>
    );

  return <button className={styles[type]}>{children}</button>;
}

export default Button;
