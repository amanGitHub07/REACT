import {useEffect, useState} from 'react';


const useOnlineStatus = () => {
    const [onlineStatus, setOnlineStatus] = useState(true);

    useEffect(() => {
        const updateOnlineStatus = (status) => {
            setOnlineStatus(status);
        };

        window.addEventListener("online", () => setOnlineStatus(true));
        window.addEventListener("offline", () => setOnlineStatus(false));

    }, []);
    
    
    return onlineStatus;

}

export default useOnlineStatus;