import Button from "./Button";

function Friend({ friend, setShowSplitForm, selectedFriend }) {
  const isSelected = friend === selectedFriend;
  return (
    <li className={isSelected ? "selected" : ""}>
      <img src={`${friend.image}`} alt="" />

      <h3>{friend.name}</h3>

      <p
        className={
          friend.balance < 0 ? "red" : friend.balance > 0 ? "green" : ""
        }
      >
        {friend.balance === 0
          ? `You and ${friend.name} are even`
          : friend.balance < 0
          ? `You owe ${friend.name} $${Math.abs(friend.balance)}`
          : `${friend.name} owes you $${friend.balance}`}
      </p>

      <Button click={() => setShowSplitForm(isSelected ? null : friend)}>
        {isSelected ? "Close" : "Select"}
      </Button>
    </li>
  );
}

export default Friend;
