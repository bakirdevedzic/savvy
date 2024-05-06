function TableHead({ title, width }) {
  const styles = {
    padding: "0.75rem",
    borderRightWidth: "1px",
    fontSize: "0.875rem",
    lineHeight: "1.25rem",
    fontWeight: "700",
    letterSpacing: "0.025em",
    color: "#EBF4F0",
    width: `${width}rem`,
  };
  return <th style={styles}>{title}</th>;
}

export default TableHead;
