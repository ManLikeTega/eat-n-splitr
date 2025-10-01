import Friend from "./Friend";

function FriendList({ initialFriends, setShowSplitForm, selectedFriend }) {
  return (
    <ul>
      {initialFriends.map((i) => (
        <Friend
          friend={i}
          key={i.id}
          setShowSplitForm={setShowSplitForm}
          selectedFriend={selectedFriend}
        />
      ))}
    </ul>
  );
}

export default FriendList;
