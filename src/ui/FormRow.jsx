function FormRow({ label, children, error }) {
  return (
    <div
      className="grid grid-cols-[4rem_1fr_1fr] items-center gap-[2.4rem] p-[0.5rem_0] border-b-2 border-primary-gray border-opacity-10
    us:flex us:flex-col us:gap-1 us:items-start"
    >
      <p className=" font-xl font-semibold text-gray-700 font-almarai w-[40%]">
        {label}
      </p>
      <div>
        {children}
        {error && (
          <p className="text-red-500 text-sm font-almarai font-semibold mt-1">
            {error}
          </p>
        )}
      </div>
    </div>
  );
}

export default FormRow;
