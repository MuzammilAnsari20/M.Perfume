import { Link, useLocation } from "react-router-dom";
import logo_white from '../../assets/img/Mens/admin_logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse, faMessage } from '@fortawesome/free-solid-svg-icons'
import { Badge } from 'primereact/badge';
import useMessageNotification from "../Hooks/notification";
import { useEffect, useState } from "react";
import axios from "axios";



function AdminSidebar({ isOpen, setIsOpen }) {
  const location = useLocation();
  
  const [unreadMessages, setUnreadMessages] = useState(0);

  useMessageNotification(setUnreadMessages);

  useEffect(() => {
    axios.get("http://localhost:8000/api/messages/unread-count")
      .then((res) => {
        if (res.data && res.data.count !== undefined) {
          setUnreadMessages(res.data.count);
        }
      })
      .catch((err) => console.log(err));
  }, []);


  return (
    <aside className={`bg-[linear-gradient(265deg,rgba(0,0,0,0)_0%,rgba(0,0,0,0.5)_50%,rgba(0,0,0,1)_100%)] min-h-screen flex flex-col transition-all duration-300
        ${isOpen ? "w-[20%]" : "w-[0%]"}`}>

      {/* Logo */}
      <div className="flex items-center py-3! px-3! border-b-2 border-[#700088] bg-[#41015c] overflow-hidden">
        <img src={logo_white} className="w-[90%]" alt="" />
      </div>

      {/* Nav Items */}
      <nav className="flex-1 pt-1 text-[14px]">

        <Link to="/admin"
          className={"flex items-center gap-3 px-3! py-3! font-[Inter] text-[12px] bg-[#41015c] border-b-2 border-[#700088] transition-all overflow-hidden"}
        >
          <FontAwesomeIcon icon={faHouse} /> Dashboard
        </Link>

        <Link to="/admin/Message"
          className={`flex items-center ${unreadMessages > 0 ? 'gap-5' : 'gap-3'} px-3! py-3! font-[Inter] text-[12px] bg-[#41015c] border-b-2 border-[#700088] transition-all overflow-hidden`}
        >
          <div className="relative flex items-center">
            <FontAwesomeIcon icon={faMessage} />
            {unreadMessages > 0 && (
              <Badge value={unreadMessages} severity="danger" className="absolute -top-2 -right-3 bg-red-500 text-white text-[9px] w-4 h-4 flex items-center justify-center rounded-full"></Badge>
            )}
          </div>
          Messages
        </Link>

        {/* <Link to="/admin/products"
              className={"flex items-center gap-3 px-3 py-2! border-b border-[#2c3338] transition-all overflow-hidden"}
            >
            Product
            </Link>
            <Link to="/admin/settings"
              className={"flex items-center gap-3 px-3 py-2! border-b border-[#2c3338] transition-all overflow-hidden"}
            >
            Setting
            </Link> */}

      </nav>

      {/* Collapse Button — WordPress style */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-3 px-3 py-3 border-t border-[#2c3338] text-[#a7aaad] hover:text-white hover:bg-[#2c3338] transition-all"
      >
        <span className={`text-lg transition-transform duration-300 ${isOpen ? "" : "rotate-180"}`}>
          ◀
        </span>
        {isOpen && <span className="text-sm whitespace-nowrap cursor-pointer">Collapse</span>}
      </button>

    </aside>
  );
}

export default AdminSidebar;