import Button from "./Button";

function ConfirmationTab({ onClick }) {
  function handleClick() {
    onClick();
  }
  return (
    <div className="w-[350px] h-[150px] grid grid-rows-[70%_30%] max-w-full">
      <div className="font-almarai text-lg break-words overflow-auto ">
        <p className="font-bold">Are you sure you want to finish this goal?</p>
        <p className="font-semibold">You haven&apos;t reached it yet.</p>
      </div>
      <div className="flex flex-row justify-end gap-2">
        <Button type="secondary" onClick={handleClick}>
          No
        </Button>
        <Button type="base">Yes</Button>
      </div>
    </div>
  );
}

export default ConfirmationTab;
