function FormRow({ label, children }) {
  return (
    <div
      className="grid grid-cols-[4rem_1fr_1fr] items-center gap-[2.4rem] p-[0.5rem_0] border-b-2 border-primary-gray border-opacity-10
    us:flex us:flex-col us:gap-1 us:items-start"
    >
      <p className=" font-xl font-semibold text-gray-700 font-almarai w-[40%]">
        {label}
      </p>
      {children}
    </div>
  );
}

export default FormRow;
