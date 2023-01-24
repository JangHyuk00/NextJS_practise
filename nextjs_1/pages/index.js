import MeetupList from "../components/meetups/MeetupList"

const DUMMY_MEETUPS = [
    {
        id: "m1",
        title: "A First Meetup",
        image: "https://upload.wikimedia.org/wikipedia/commons/d/d3/Stadtbild_M%C3%BCnchen.jpg",
        address: "some address 1, 12345 some city",
        description: "This is a First meetup"
    },
    {
        id: "m2",
        title: "A Second Meetup",
        image: "https://upload.wikimedia.org/wikipedia/commons/d/d3/Stadtbild_M%C3%BCnchen.jpg",
        address: "some address 2, 12345 some city",
        description: "This is a Second meetup"
    }
]

const HomePage = (props) => {
 return <MeetupList meetups={props.meetups} />
}

export async function getStaticProps () {
    return {
        props: {
            meetups: DUMMY_MEETUPS
        }
    };
}

export default HomePage;