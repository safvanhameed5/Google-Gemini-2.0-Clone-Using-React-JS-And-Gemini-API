import React, { useContext, useState } from "react";
import "./Sidebar.css";
import { assets } from "../../assets/assets";
import { Context } from "../../context/context";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdHelpCircleOutline } from "react-icons/io";
import { IoIosTimer } from "react-icons/io";
import { IoSettingsSharp } from "react-icons/io5";

const Sidebar = () => {
  const [extended, setExtended] = useState(false);
  const { onSent, previousPrompt, setRecentPrompt, newChat } = useContext(Context);
  const loadPrompt = async (prompt) => {
    setRecentPrompt(prompt)
    await onSent(prompt)
  }
  return (
    <div className="sidebar">
      <div className="top">
        <GiHamburgerMenu onClick={() => setExtended((prev) => !prev)} className="menu"/>
        <div className="new-chat">
          <img onClick={()=>newChat()} src={assets.plus_icon} alt="" />
          {extended ? <p>New Chat</p> : null}
        </div>
        {extended ? (
          <div className="recent">
            <p className="recent-title">Recent</p>
            {previousPrompt.map((item, index) => {
              return (
                <div onClick={()=>loadPrompt(item)} key={index} className="recent-entry">
                  <img src={assets.message_icon} alt="" />
                  <p>{item.slice(0,18)}</p>
                </div>
              );
            })}
          </div>
        ) : null}
      </div>
      <div className="bottom">
        <div className="bottom-item recent-entry">
        <IoMdHelpCircleOutline />
          {extended ? <p>Help</p> : null}
        </div>
        <div className="bottom-item recent-entry">
        <IoIosTimer />
          {extended ? <p>Activity</p> : null}
        </div>
        <div className="bottom-item recent-entry">
        <IoSettingsSharp />
          {extended ? <p>Settings</p> : null}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
