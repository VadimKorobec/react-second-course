import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { NewMeetupForm } from "../components/Meetups/NewMeetupForm";

export const NewMeetupPage = () => {
  const history = useHistory();

  const handleAddNewMeetup = (meetupData) => {
    fetch(
      "https://fresh-circle-397613-default-rtdb.firebaseio.com/meetups.json",
      {
        method: "POST",
        body: JSON.stringify(meetupData),
        headers: {
          "Content-Type": "application/json",
        },
      }
    ).then(() => {
      history.replace("/");
    });
  };

  return (
    <section>
      <h1 style={{ textAlign: "center" }}>Add New Meetup</h1>
      <NewMeetupForm onAddMeetup={handleAddNewMeetup} />
    </section>
  );
};
