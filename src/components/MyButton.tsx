import { UserContext, UserDispatchContext } from "@/context/userContext";
import { Box, Button } from "@mui/material";
import { useContext } from "react";

export default function MyButton() {
    const user = useContext(UserContext);
    const dispatch = useContext(UserDispatchContext);

    let action = {};
    if(user.isConnected) {
        action.type = "logout";
    } else {
        action.type = "login";
        action.user = {
            username: "Florian",
            //avatarUrl: "https://i.imgur.com/2hBebTU.jpeg",
        };
    }

    function handleOnClick() {
        dispatch(action);
    }
    return (
        <Box>
            <Button variant="contained" {...(user.isConnected && {color: "error"})} onClick={handleOnClick}>
                {user.isConnected ? "Se déconnecter" : "Se connecter"}
            </Button>
        </Box>
    )
}