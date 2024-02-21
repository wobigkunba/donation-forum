import PostList from "../components/PostList";

const Home = () => {
  const postsData = [
    {
      id: 1,
      title: "Helping Those in Need: Food Donation Drive",
      content:
        "We are organizing a food donation drive to support local communities in need. Join us in making a difference!",
      author: "John Doe",
      date: "2022-09-15",
      replys: [
        {
          id: 1,
          content: "We ar",
          author: "John Doe",
          date: "2022-09-15",
        },
        {
          id: 2,
          content: "Count me in!",
          author: "Jane Smith",
          date: "2022-09-16",
        },
        {
          id: 3,
          content: "I'll be there to help!",
          author: "Michael Johnson",
          date: "2022-09-17",
        },
      ],
    },
    {
      id: 2,
      title: "Volunteers Needed for Food Distribution",
      content:
        "Calling all volunteers! We need your help in distributing food to families and individuals facing food insecurity.",
      author: "Jane Smith",
      date: "2022-09-20",
      replys: [
        {
          id: 1,
          content: "I can volunteer on weekends.",
          author: "John Doe",
          date: "2022-09-21",
        },
        {
          id: 2,
          content: "Count me in!",
          author: "Michael Johnson",
          date: "2022-09-22",
        },
      ],
    },
    {
      id: 3,
      title: "Donate Your Excess Food and Reduce Waste",
      content:
        "Don't let your excess food go to waste. Donate it to our food bank and help feed those in need.",
      author: "Michael Johnson",
      date: "2022-09-25",
      replys: [
        {
          id: 1,
          content: "I have some canned goods to donate.",
          author: "Jane Smith",
          date: "2022-09-26",
        },
        {
          id: 2,
          content: "I'll drop off some fresh produce.",
          author: "John Doe",
          date: "2022-09-27",
        },
      ],
    },
    {
      id: 4,
      title: "Donate Your Excess Food and Reduce Waste",
      content:
        "Don't let your excess food go to waste. Donate it to our food bank and help feed those in need.",
      author: "Michael Johnson",
      date: "2022-09-25",
      replys: [
        {
          id: 1,
          content: "I have some canned goods to donate.",
          author: "Jane Smith",
          date: "2022-09-26",
        },
        {
          id: 2,
          content: "I'll drop off some fresh produce.",
          author: "John Doe",
          date: "2022-09-27",
        },
      ],
    },
    {
      id: 5,
      title: "Donate Your Excess Food and Reduce Waste",
      content:
        "Don't let your excess food go to waste. Donate it to our food bank and help feed those in need.",
      author: "Michael Johnson",
      date: "2022-09-25",
      replys: [
        {
          id: 1,
          content: "I have some canned goods to donate.",
          author: "Jane Smith",
          date: "2022-09-26",
        },
        {
          id: 2,
          content: "I'll drop off some fresh produce.",
          author: "John Doe",
          date: "2022-09-27",
        },
      ],
    },
    {
      id: 6,
      title: "Donate Your Excess Food and Reduce Waste",
      content:
        "Don't let your excess food go to waste. Donate it to our food bank and help feed those in need.",
      author: "Michael Johnson",
      date: "2022-09-25",
      replys: [
        {
          id: 1,
          content: "I have some canned goods to donate.",
          author: "Jane Smith",
          date: "2022-09-26",
        },
        {
          id: 2,
          content: "I'll drop off some fresh produce.",
          author: "John Doe",
          date: "2022-09-27",
        },
      ],
    },
    {
      id: 7,
      title: "Donate Your Excess Food and Reduce Waste",
      content:
        "Don't let your excess food go to waste. Donate it to our food bank and help feed those in need.",
      author: "Michael Johnson",
      date: "2022-09-25",
      replys: [
        {
          id: 1,
          content: "I have some canned goods to donate.",
          author: "Jane Smith",
          date: "2022-09-26",
        },
        {
          id: 2,
          content: "I'll drop off some fresh produce.",
          author: "John Doe",
          date: "2022-09-27",
        },
      ],
    },
  ];

  return (
    <div className="home">
      <p>welcome posting donation forum</p>
      <PostList postsData={postsData} />
    </div>
  );
};

export default Home;
