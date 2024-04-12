import Button from "./Button";
import Spinner from "./Spinner";

function ConfirmationTab({ onClick, confirm, title, text, loading }) {
  function handleClick() {
    onClick();
  }
  function handleYesClick() {
    confirm(true);
  }
  return (
    <div className="w-[350px] h-[150px] grid grid-rows-[70%_30%] max-w-full">
      <div className="font-almarai text-lg break-words overflow-auto ">
        <p className="font-bold whitespace-normal">{title}</p>
        <p className="font-semibold  whitespace-normal">{text}</p>
      </div>
      <div className="flex flex-row justify-end gap-2">
        <Button type="secondary" onClick={handleClick}>
          No
        </Button>
        <Button type="base" onClick={handleYesClick}>
          {loading ? <Spinner /> : "Yes"}
        </Button>
      </div>
    </div>
  );
}

export default ConfirmationTab;
