import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  onClose: () => void;
}

export default function Modal({ children, onClose }: Props) {
  return (
    <div>
      <button onClick={onClose}>Close</button>
      {children}
    </div>
  );
}