import { NewMeetupForm } from "../components/Meetups/NewMeetupForm";

export const NewMeetupPage = () => {
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
    );
  };

  return (
    <section>
      <h1 style={{ textAlign: "center" }}>Add New Meetup</h1>
      <NewMeetupForm onAddMeetup={handleAddNewMeetup} />
    </section>
  );
};
