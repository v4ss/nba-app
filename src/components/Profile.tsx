import { Box } from "@mui/material";
import  Image  from "next/image";

export default function Profile({player, isConnected}) {
    return (
        <Box>
            {isConnected && (
                <>
                    <p>Nom du joueur : {player.name}</p>
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