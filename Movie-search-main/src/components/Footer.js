import React from "react";
import "../App.css";

export const Footer = () => {
  return (
    <div className="footer text-center row p-4 font-weight-normal" >
      <div className="text-center">
        <a
          id="license"
          target="_blank"
          href="https://github.com/Divyathali"
        >
          Github
        </a>
      </div>
      <div className="col love">
        Made by &nbsp;
        <a
          id="my-twitter-id"
          target="_blank"
          href=""
        >
          @Divyath ali 
        </a>
      </div>
      
    </div>
  );
};
