import { Link, useLocation } from "react-router-dom";
import logo_white from '../../assets/img/mens/admin_logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse, faMessage } from '@fortawesome/free-solid-svg-icons'



function AdminSidebar({ isOpen, setIsOpen }) {
  const location = useLocation();

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
          className={"flex items-center gap-3 px-3! py-3! font-[Inter] text-[12px] bg-[#41015c] border-b-2 border-[#700088] transition-all overflow-hidden"}
        >
          <FontAwesomeIcon icon={faMessage} /> Message<sup className="text-white bg-red-600 px-1.5! py-2! rounded-full"></sup>
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