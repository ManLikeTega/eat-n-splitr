import { useState } from "react";
import Button from "./components/Button";
import FormAddFriend from "./components/FormAddFriend";
import FormSplitBill from "./components/FormSplitBill";
import FriendList from "./components/FriendList";

const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];

function App() {
  const [showAddFriend, setShowAddFriend] = useState(false);
  const [friendList, setFriendList] = useState(initialFriends);
  const [selectedFriend, setSelectedFriend] = useState(null);

  const showAddFriendHandler = () => {
    setShowAddFriend((i) => !i);
  };

  const addFriendHandler = (item) => {
    setFriendList((i) => [...i, item]);
  };

  const setShowSplitFormHandler = (friend) => {
    setSelectedFriend(friend);
  };

  const splitBillHandler = (value) => {
    setFriendList((i) => [
      { ...selectedFriend, balance: selectedFriend.balance + value },
      ...i.filter((f) => f.id !== selectedFriend.id),
    ]);
  };

  return (
    <div className="app">
      <div className="sidebar">
        <FriendList
          initialFriends={friendList}
          setShowSplitForm={setShowSplitFormHandler}
          selectedFriend={selectedFriend}
        />

        {showAddFriend && (
          <FormAddFriend
            addFriendHandler={addFriendHandler}
            showAddFriendHandler={showAddFriendHandler}
          />
        )}

        <Button click={showAddFriendHandler}>
          {showAddFriend ? "Close" : "Add Friend"}
        </Button>
      </div>

      {selectedFriend && (
        <FormSplitBill
          selectedFriend={selectedFriend}
          onSplitBill={splitBillHandler}
          setShowSplitForm={setShowSplitFormHandler}
        />
      )}
    </div>
  );
}

export default App;
