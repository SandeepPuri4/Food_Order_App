import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

export default function Modal({ children, open, onClose, className= '' }) {
 const dialoge = useRef();
 useEffect(() => {
  const modal = dialoge.current;
  if(open){
  modal.showModal();
  }

  return () => modal.close();
 }, [open])

  return createPortal(
    <dialog ref={dialoge} className={`modal ${className}`} onClose={onClose}>{children}</dialog>,
    document.getElementById("modal")
  );
}
