import { useState } from "react";
import Button from "./Button";

function FormAddFriend({ addFriendHandler, showAddFriendHandler }) {
  const [friendName, setFriendName] = useState("");
  const [imageUrl, setImageUrl] = useState("https://i.pravatar.cc/48");

  const addFriendsHandler = (e) => {
    e.preventDefault();

    const input = {
      id: Date.now(),
      name: friendName,
      image: `${imageUrl}?=${Date.now()}`,
      balance: 0,
    };

    addFriendHandler(input);
    setImageUrl("https://i.pravatar.cc/48");
    showAddFriendHandler();
  };

  return (
    <form className="form-add-friend" onSubmit={addFriendsHandler}>
      <label htmlFor="name">🧑‍🤝‍👨 Friend's name</label>
      <input type="text" onChange={(e) => setFriendName(e.target.value)} />

      <label htmlFor="name">🌄 Image URL</label>
      <input
        type="text"
        value={imageUrl}
        onChange={(e) => setImageUrl(e.target.value)}
      />

      <Button>Add</Button>
    </form>
  );
}

export default FormAddFriend;
