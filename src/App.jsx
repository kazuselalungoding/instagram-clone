import { useEffect, useState } from "react";
import Header from "./assets/component/header";
import NavigationBar from "./assets/component/navigation-bar";
import Post from "./assets/component/post";
import StoryUser from "./assets/component/story-user";

function App() {
  useEffect(() => {
    fetchMembers();
  });

  const [members, setMebers] = useState([])
  return (
    <div className="h-screen w-screen flex justify-center items-center md:p-5 bg-gradient-to-br from-gray-300 to-gray-500">
      <div className="flex flex-col h-full w-full md:max-w-sm bg-white md:rounded-xl shadow-xl overflow-hidden">
        <Header />
        <div className="flex flex-col flex-1 overflow-x-auto">
          <div className="p-3 border-b flex gap-3 flex-none overflow-x-auto w-full">
            <StoryUser
              foto="https://scontent-cgk2-1.xx.fbcdn.net/v/t39.30808-6/439941705_7784491211612537_4746747856880066593_n.png?stp=dst-jpg&_nc_cat=1&ccb=1-7&_nc_sid=2285d6&_nc_eui2=AeFcwt-Wu1uG_Xj37D_oitwjWg5QjztinStaDlCPO2KdKzf-4M8MLZy3iqEjOo6glYeCh9XRsag7EXRjVCjGFKko&_nc_ohc=sHnS-HvMYLAQ7kNvgH5yM7g&_nc_ht=scontent-cgk2-1.xx&_nc_gid=AACafLOfwTxlLnODTjMKcJt&oh=00_AYAxs2btM25nMwepQ1OdE8pkukuec0MCjMJBffUWOZPioQ&oe=6702B6A6"
              nama="imphen"
            />
            <StoryUser
              foto="https://scontent-cgk1-1.xx.fbcdn.net/v/t39.30808-6/461590384_1537660273549501_8961401235461254362_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeHX0Q51CipCPZYT1iBoxCSvlNqq-R4WKeCU2qr5HhYp4K6wx4ACHK-7hHNKDbUb4DRAqURkiD1LWki3P_t3eKBF&_nc_ohc=4CJ4JpCjqHoQ7kNvgH--S7v&_nc_ht=scontent-cgk1-1.xx&_nc_gid=A9vEototNqFdh3tnbQgoj61&oh=00_AYAvMHQqFhEMexqf7HImiOdsP6ZlnF3-A9gK5qixtqC5Pg&oe=670507E1"
              nama="SirWatskin"
            />
            <StoryUser
              foto="https://scontent-cgk1-2.xx.fbcdn.net/v/t39.30808-6/461994329_873945714841505_8791006180917930602_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=aa7b47&_nc_eui2=AeE42pO8t1sCfdLrDGtWMBAqXP9PjFE8RBtc_0-MUTxEGzluV6Ew4QwUvLY139GdcMVzX_GtSRuVry14Z0Ga4SQc&_nc_ohc=_nXllSIYyksQ7kNvgFQbRed&_nc_ht=scontent-cgk1-2.xx&_nc_gid=Al-1xbcAuVMpAasC7QALegB&oh=00_AYA2b-ypifGT2xF-GIylVzOBoTy858h1VOokDhQpgyGAXQ&oe=670519D3"
              nama="Ino"
            />
            <StoryUser
              foto="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVrKzDe1RChXyOmrXaanNkLKi5hzaacC4lpg&s"
              nama="titon"
            />
            <StoryUser
              foto="https://i.pinimg.com/736x/f0/e8/08/f0e80840835547d3fa314cb33100db07.jpg"
              nama="windah"
            />
          </div>                                                                   
          <Post />
        </div>
        <NavigationBar />
      </div>
    </div>
  );
}

export default App;
