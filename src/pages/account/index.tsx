import MyButton from "@/components/MyButton";
import Profile from "@/components/Profile";
import { Box, Typography } from "@mui/material";
import { useContext } from "react";
import { UserContext } from "@/context/userContext";

export default function Account() {
    const player = {
        name: "LeBronJames",
        //avatarUrl: "https://i.imgur.com/2hBebTU.jpeg"
    };

    const user = useContext(UserContext);

    return (
        <Box>
            <Typography variant="h3">Mon compte</Typography>
            <Box>
                <Profile player={player} isConnected={user.isConnected}/>
                <MyButton/>
            </Box>
        </Box>
    )
}