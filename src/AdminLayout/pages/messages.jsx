
import Table from "../components/table"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashCan } from '@fortawesome/free-solid-svg-icons'
import axios from 'axios';
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

function Message(){
    const [data, setData] = useState([]);
    const contactCol = [
        {
            key: "first_name",
            lable: "First Name"
        },
        {
            key: "email",
            lable: "Email"
        },
        {
            key: "massage",
            lable: "Massage"
        }
    ]
    const handleDelete = async (row) => {
        try {
            await axios.delete(`http://192.168.10.22:8000/api/delete/${row.id}`)
                .then(() => {
                    setData(data.filter((item) => item.id !== row.id));
                })
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        const markAllAsRead = async () => {
            const hasUnread = data.some(item => item.is_read === 0);
            if (!hasUnread) return;

            try {
                await axios.put("http://localhost:8000/api/messages/read-all");
                setData(prevData => prevData.map(item => ({ ...item, is_read: 1 })));
            } catch (error) {
                console.log(error);
            }
        };

        if (data.length > 0) {
            markAllAsRead();
        }
    }, [data]);
    
    return(
        <div className="px-10! py-10! w-full h-[80vh]">
        <h1 className="text-white font-[Poppins] text-[24px] font-bold">Messages</h1>
        <br />
<motion.div
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                            duration: 0.4,
                            ease: "easeInOut",
                        }}
                    >
                        <Table
                            data={data}
                            setData={setData}
                            columns={contactCol}
                            endpoint="http://localhost:8000/api/massages"
                            actions={[
                                {
                                    label: <FontAwesomeIcon icon={faTrashCan} className="text-red-500 text-lg hover:text-red-700 transition-colors" title="Delete" />,
                                    onClick: handleDelete
                                }
                            ]} />
                    </motion.div>
        </div>
    )
}
export default Message