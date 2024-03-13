import { useEffect } from "react";

export const useHandleOutsideClick = ({ ref, onClose }) => {
  useEffect(() => {
    function handleOutsideClick(e) {
      console.log(e.target);
      if (
        ref.current &&
        !ref.current.contains(e.target) &&
        e.target.id !== "addBtn"
      ) {
        onClose();
      }
    }

    window.addEventListener("mousedown", handleOutsideClick);

    return () => {
      window.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [ref, onClose]);
};
