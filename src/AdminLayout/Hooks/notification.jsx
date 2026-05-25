import { useEffect } from "react";
import Pusher from "pusher-js";

const useMessageNotification = (setUnreadMessages) => {

    useEffect(() => {
        
        const pusher = new Pusher(
            import.meta.env.VITE_PUSHER_KEY,
            {
                cluster: import.meta.env.VITE_PUSHER_CLUSTER,
                forceTLS: true
            }
        );

        // Connection events
        pusher.connection.bind('connected', () => {
            console.log("✅ Pusher connected!");
        });

        pusher.connection.bind('error', (error) => {
            console.error("❌ Pusher connection error:", error);
        });

        pusher.connection.bind('unavailable', () => {
            console.warn("⚠️ Pusher unavailable");
        });

        const channel = pusher.subscribe("notifications");

        channel.bind("message-unread", (data) => {
            console.log("📨 FULL DATA:", data);
            console.log("📨 COUNT:", data.count);
            if (data && typeof data.count === 'number') {
                setUnreadMessages(data.count);
            }
        });

        return () => {
            channel.unbind_all();
            channel.unsubscribe();
            pusher.disconnect();
        };

    }, [setUnreadMessages]);

};

export default useMessageNotification;