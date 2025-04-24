import React from "react";
import { IoMdAdd } from "react-icons/io";
import { MdOutlineHorizontalRule } from "react-icons/md";

import { HiPlusSmall } from "react-icons/hi2";
import { HiMinusSmall } from "react-icons/hi2";

import "./SetAmount.css";

export function SetAmount({ amount, onAdd, onSubtract }) {
  return (
    <div className="SetAmount">
      <button name="subtract" onClick={onSubtract} aria-label="Restar cantidad">
        <HiMinusSmall />
      </button>
      <input
        type="number"
        min={1}
        value={amount}
        readOnly
        aria-label="Cantidad de producto"
      />
      <button name="add" onClick={onAdd} aria-label="Sumar cantidad">
        <HiPlusSmall />
      </button>
    </div>
  );
}
