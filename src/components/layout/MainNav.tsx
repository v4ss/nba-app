import { UserDispatchContext } from "@/context/userContext";
import { AppBar, Box, Button, IconButton, Link, Toolbar, Typography } from "@mui/material";
import { useContext } from "react";

export default function MainNav() {
    const dispatch = useContext(UserDispatchContext);
    const pages = [
        {title: "NBA Player", url: "/players"},
        {title: "Mon compte", url: "/account"}
    ];

    function handleClick() {
        dispatch({type: "logout"});
    }

    return (
        <Box>
            <AppBar position="static">
                <Toolbar>
                    <Box>
                        <Link href={"/"}>
                            <Button variant="text" sx={{ color: "white" }}>
                                <Typography variant="h6" component="div" sx={{ flaxGrow: 1 }}>My NBA</Typography>
                            </Button>
                        </Link>
                    </Box>
                    <Box display={"flex"} flex={1} marginLeft={10}>
                        {pages.map((page) => (
                            <Link href={page.url} key={page.url}>
                                <Button variant="text" sx={{ color: "white" }}>
                                    <Typography variant="h6" component="div" sx={{ flaxGrow: 1 }}>{page.title}</Typography>
                                </Button>
                            </Link>
                        ))}
                    </Box>
                    <Button variant="contained" color="error" onClick={handleClick}>Se déconnecter</Button>
                </Toolbar>
            </AppBar>
        </Box>
    )
}