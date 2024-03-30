function TableHead({ title, width }) {
  return (
    <th
      className={`p-3 text-poppins text-sm font-bold text-primary-white-2 tracking-wide border-r w-${width}`}
    >
      {title}
    </th>
  );
}

export default TableHead;
