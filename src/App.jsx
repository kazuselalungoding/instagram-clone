import { useEffect, useState } from "react";
import Header from "./assets/component/header";
import NavigationBar from "./assets/component/navigation-bar";
import Post from "./assets/component/post";
import StoryUser from "./assets/component/story-user";

function App() {
  useEffect(() => {
    fetchMembers();
  },[]);

  
  const [members, setMembers] = useState([]);

  const fetchMembers = () => {
    fetch("http://localhost:8000/api/members",{
      method : "GET",
      headers : {
        "Content-Type" : "application/json",
      },
    })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((data) => {
      console.log("Members data:", data);
      setMembers(data.data);
    })
    .catch((error) => {
      console.error("Error fetching members:", error);
    })

  }
  return (
    <div className="h-screen w-screen flex justify-center items-center md:p-5 bg-gradient-to-br from-gray-300 to-gray-500">
      <div className="flex flex-col h-full w-full md:max-w-sm bg-white md:rounded-xl shadow-xl overflow-hidden">
        <Header />
        <div className="flex flex-col flex-1 overflow-x-auto">
          <div className="p-3 border-b flex gap-3 flex-none overflow-x-auto w-full">
            {members.map((member) => (
              <StoryUser foto={member.avatar} nama={member.name} />
            ))}
          </div>                                                                   
          {members.map((member) => (
            <Post foto={member.avatar} nama={member.name}/>
          ))}
        </div>
        <NavigationBar />
      </div>
    </div>
  );
}

export default App;
