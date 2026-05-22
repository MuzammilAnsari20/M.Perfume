import Pusher from "pusher";

const pusher = new Pusher({

    appId: 2158078,
    key: "147f1a5a21bd324ba082",
    secret: "6885e5e383768e2c2142",
    cluster: "ap2",
    useTLS: true
});

export default pusher;