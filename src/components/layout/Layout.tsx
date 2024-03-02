import { Box, Container } from "@mui/material";
import MainNav from "./MainNav";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin" ]});

export default function Layout({ children }) {
    return (
        <Box>
            <MainNav />
            <Box sx={{felx: 1, display: "felx, flexGrow: 1"}} component={"main"}>
                <Container display="flex" flex={1}>
                    {children}
                </Container>
            </Box>
        </Box>
    )
}