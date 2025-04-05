import React from "react";
import { IoMdAdd } from "react-icons/io";
import { MdOutlineHorizontalRule } from "react-icons/md";
import "./SetAmount.css";

export function SetAmount({ amount, onAdd, onSubtract }) {
  return (
    <div className="SetAmount">
      <IoMdAdd onClick={onAdd} />
      <input type="number" min={1} value={amount} readOnly />
      <MdOutlineHorizontalRule onClick={onSubtract} />
    </div>
  );
}
