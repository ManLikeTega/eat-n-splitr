import { useState } from "react";
import Button from "./Button";

function FormSplitBill({ selectedFriend, onSplitBill, setShowSplitForm }) {
  const [billValue, setBillValue] = useState(null);
  const [yourExpense, setYourExpense] = useState(null);
  const friendExpense = billValue ? billValue - yourExpense : "";
  const [whoIsPaying, setWhoIsPaying] = useState(1);

  const splitbillHandler = (e) => {
    e.preventDefault();

    if (!billValue || !yourExpense) return;

    onSplitBill(whoIsPaying === 1 ? friendExpense : -yourExpense);

    setShowSplitForm(null);
  };

  return (
    <form className="form-split-bill" onSubmit={splitbillHandler}>
      <h2>split a bill with {selectedFriend.name}</h2>

      <label>💰 Bill value</label>
      <input
        type="text"
        onChange={(e) => Number(setBillValue(e.target.value))}
      />

      <label>🙍‍♂️ Your expense</label>
      <input
        type="text"
        value={yourExpense}
        onChange={(e) =>
          setYourExpense(
            Number(e.target.value) > billValue
              ? yourExpense
              : Number(e.target.value)
          )
        }
      />

      <label>🧑‍🤝‍👨 {selectedFriend.name}'s expense</label>
      <input type="text" disabled value={friendExpense} />

      <label>🤑 Who is paying the bill</label>
      <select onChange={(e) => Number(setWhoIsPaying(e.target.value))}>
        <option value={1}>You</option>
        <option value={2}>{selectedFriend.name}</option>
      </select>

      <Button>Split bill</Button>
    </form>
  );
}

export default FormSplitBill;
