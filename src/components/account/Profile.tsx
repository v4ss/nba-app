import { UserContext } from "@/context/userContext";
import { Box } from "@mui/material";
import  Image  from "next/image";
import { useContext } from "react";

export default function Profile() {
    const user = useContext(UserContext);
    
    return (
        <Box>
            {user.isConnected && (
                <>
                    <p>Nom du joueur : {user.username}</p>
                    {/* <Image
                        src={player.avatarUrl}
                        alt={"Avatar Player"}
                        width={200}
                        height={200}
                    /> */}
                </>
            )}
        </Box>
    )
}