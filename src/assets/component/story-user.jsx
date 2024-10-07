import React from "react";

const StoryUser = (props) => {
  return (
    <div className="flex flex-col items-center text-xs">
      <div className="h-16 w-16 rounded-full bg-gradient-to-br from-purple-500 to-rose-500 p-0.5">
        <div className="h-full w-full bg-white rounded-full p-0.5">
          <img
            src={props.foto}
            className="h-full w-full rounded-full object-cover"
          />
        </div>
      </div>
        <p>{props.nama}</p>
    </div>
  );
};

export default StoryUser;
