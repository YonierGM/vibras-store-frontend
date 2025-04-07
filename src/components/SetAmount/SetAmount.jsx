import React from "react";
import { IoMdAdd } from "react-icons/io";
import { MdOutlineHorizontalRule } from "react-icons/md";

import { HiPlusSmall } from "react-icons/hi2";
import { HiMinusSmall } from "react-icons/hi2";

import "./SetAmount.css";

export function SetAmount({ amount, onAdd, onSubtract }) {
  return (
    <div className="SetAmount">
      <button>
        <HiMinusSmall onClick={onSubtract} />
      </button>
      <input type="number" min={1} value={amount} readOnly />
      <button>
        <HiPlusSmall onClick={onAdd} />
      </button>
    </div>
  );
}
