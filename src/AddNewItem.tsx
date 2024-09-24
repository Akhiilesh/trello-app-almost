import { useState } from "react";
import { AddItemButton } from "./styles";

type AddNewItemProps = {
  dark?: boolean;
  onAdd(text: string): void;
  toggleButtonText: string;
};

export const AddNewItem = ({
  onAdd,
  toggleButtonText,
  dark
}: AddNewItemProps) => {
  const [showForm, setShowForm] = useState(false);

  if (showForm) {
    ////
  }

  return (
    <AddItemButton dark={dark} onClick={() => setShowForm(true)}>
      {toggleButtonText}
    </AddItemButton>
  );
};
