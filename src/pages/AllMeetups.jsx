import { useEffect, useState } from "react";
import { MeetupList } from "../components/Meetups/MeetupList";



export const AllMeetupsPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [meetups, setMeetups] = useState([]);
  

  useEffect(() => {
    setIsLoading(true);
    fetch(
      "https://fresh-circle-397613-default-rtdb.firebaseio.com/meetups.json"
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const meetups = [];
        for (const key in data) {
          const meetup = {
            id: key,
            ...data[key],
          };
          meetups.push(meetup);
        }
        setIsLoading(false);
        setMeetups(meetups);
      });
  }, []);

  if (isLoading) {
    return (
      <section>
        <p>Loading ...</p>
      </section>
    );
  }

  return (
    <section>
      <h1 style={{ textAlign: "center" }}>All Meetups</h1>
      <ul>
        <MeetupList meetups={meetups} />
      </ul>
    </section>
  );
};
