import { useEffect } from "react";
import Pusher from "pusher-js";

const useMessageNotification = (setUnreadMessages) => {

    useEffect(() => {

        const pusher = new Pusher("147f1a5a21bd324ba082", {
            cluster: "ap2"
        });

        // SAME CHANNEL
        const channel = pusher.subscribe("notifications");

        // SAME EVENT
        channel.bind("message-unread", (data) => {

            console.log(data);

            // backend se count aa raha hai
            setUnreadMessages(data.count);

        });

        return () => {
            channel.unbind_all();
            channel.unsubscribe();
        };

    }, []);

};

export default useMessageNotification;