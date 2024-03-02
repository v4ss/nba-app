import { Box, Divider, List, ListItem, ListItemText } from "@mui/material"
import { Fragment } from "react"

export default function PlayersList({ players }) {
    return (
        <Box>
            <List>
                {players.data.map(player => (
                    <Fragment key={player.id}>
                        <ListItem>
                            <ListItemText primary={player.first_name + " " + player.last_name} secondary={player.team.full_name} />
                        </ListItem>
                        <Divider />
                    </Fragment>
                ))}
            </List>
        </Box>
    )
}