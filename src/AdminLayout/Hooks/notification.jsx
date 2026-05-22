import { useEffect } from "react"
import Pusher from "pusher-js"

const useMessageNotification = (setUnreadMessages) => {
     useEffect(() => {
        const pusher = new Pusher("147f1a5a21bd324ba082", {
            cluster: "ap2"
        });

        const channel = pusher.subscribe("messages-channel");

        channel.bind("new-message", () => {

            setUnreadMessages((prev) => prev + 1);

        })

        return () =>{
            channel.unbind_all();
            channel.unsubscribe();
        }

        
     }, []);
}

export default useMessageNotification;