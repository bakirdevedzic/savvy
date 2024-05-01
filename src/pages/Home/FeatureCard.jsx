function FeatureCard({ icon, cardTitle, text }) {
  return (
    <div className="w-[320px] flex flex-col justify-center  gap-2 border rounded-lg p-2 shadow-sm hover:scale-105">
      <div className="self-center text-4xl mt-2 min-h-[40px]">{icon}</div>
      <div className="font-poppins font-bold text-center min-h-[20px]">
        {cardTitle}
      </div>
      <div className="font-poppins text-center font-light text-gray-700 min-h-[70px]">
        {text}
      </div>
    </div>
  );
}

export default FeatureCard;
