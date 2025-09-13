import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';
import { useState } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import PortfolioCarousel from './PortfolioCarousel';

const theme = createTheme({
    typography: {
        fontFamily: "Poppins, sans-serif",
    },
});

const PortfolioSlide = () => {
    const [eventState, setEventState] = useState("past");

    return (
        <ThemeProvider theme={theme}>
        <Grid
        sx={{
            backgroundColor: "#FCF6D7",
            height: "40rem",
        }}
        >
            <Grid size={12} textAlign="center" sx={{paddingTop: "2rem"}}>
                <Typography onClick={() => setEventState("past")}
                sx={{
                    display: "inline",
                    color: eventState == "past" ? "green" : "black",
                    cursor: "pointer",
                    borderBottom: eventState == "past" ? "2px solid green" : "none",
                    opacity: "1",
                    fontSize: {xs: "1.2rem", sm: "1.3rem", md:"1.5rem"}
                }}
                >
                    Past Events
                </Typography>
                <Typography onClick={() => setEventState("upcoming")}
                sx={{
                    display: "inline",
                    marginLeft: "4rem",
                    cursor: "pointer",
                    color: eventState == "upcoming" ? "green" : "black",
                    borderBottom: eventState == "upcoming" ? "2px solid green" : "none",
                    fontSize: {xs: "1.2rem", sm: "1.3rem", md:"1.5rem"}
                }}
                >
                    Upcoming Events
                </Typography>
            </Grid>
            {eventState === "upcoming" ? <PortfolioCarousel /> : <PortfolioCarousel />}
        </Grid>
        </ThemeProvider>
    )
}

export default PortfolioSlide;