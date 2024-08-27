import toast from "react-hot-toast";

type MessageType = "success" | "error" | "warning";

const notify = (message: string, messageType: MessageType) => {

    switch (messageType) {
        case "success":
            toast.success(message,
                {
                    icon: '✅',
                    style: { color: 'green' },
                    iconTheme: {
                        primary: 'green',
                        secondary: 'white'
                    },
                    duration: 5000,
                    position: 'top-right',
                }
            );
            break;

        case "error":
            toast.error(message, {
                icon: '❌',

                style: { color: 'red' },
                iconTheme: {
                    primary: 'red',
                    secondary: 'white'
                },
                duration: 5000,
                position: 'top-right',
            });
            break;

        case "warning":
            toast(message, {
                icon: '⚠️',
                style: { color: 'yellow' },
                iconTheme: {
                    primary: 'yellow',
                    secondary: 'white'
                },
                duration: 5000,
                position: 'top-right',
            });
            break;

        default:
            toast(message, { icon: '👋' });;
    }
};

export default notify;
