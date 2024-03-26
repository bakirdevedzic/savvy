function Modal({ visible, render, onClose }) {
  function handleOnClose(e) {
    if (e.target.id === "container") onClose();
  }
  if (!visible) return null;
  return (
    <div
      id="container"
      className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center w-screen z-[999] h-screen  transition-all duration-300"
      onClick={handleOnClose}
    >
      <div className="bg-white p-4 rounded">{render}</div>
    </div>
  );
}

export default Modal;
