import styles from "@styles/MyButton.module.css";
import { Box, Button } from "@mui/material";

export default function MyButton({ isConnected, handleOnClick}) {
    return(
        <Box>
            <Button variant="contained" {...(isConnected && { color: "error" })} onClick={handleOnClick}>
                {isConnected ? "Se déconnecter" : "Se connecter"}
            </Button>
        </Box>
    )
}