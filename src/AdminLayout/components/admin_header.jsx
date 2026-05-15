import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCheck } from '@fortawesome/free-solid-svg-icons'
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom";

function AdminHeader() {
    return (
        <div className="w-full bg-[#41015c] px-10! py-3! flex justify-between items-center">
           <div className="flex gap-2 font-[Inter] text-[13px] items-center">
             <FontAwesomeIcon icon={faUserCheck} />
             <h1>Admin Panel</h1>
           </div>
           
           <Link to="/">
            <div className="flex gap-2 font-[Inter] text-[13px] items-center">
                <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                <h1>Site</h1>
            </div>
           </Link>
           
        </div>
    );
}

export default AdminHeader;