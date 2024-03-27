function FormRow({ label, children }) {
  return (
    <div className="grid grid-cols-[4rem_1fr_1fr] items-center gap-[2.4rem] p-[1.2rem_0] border-b border-primary-gray border-opacity-50">
      <p className=" font-xl font-medium font-almarai w-[40%]">{label}</p>
      {children}
    </div>
  );
}

export default FormRow;
