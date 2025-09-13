import Grid from '@mui/material/Grid';
import PortfolioCarousel from '../components/PortfolioCarousel';
import { useNavigate } from "react-router-dom";


const Portfolio = () => {
    // const [eventState, setEventState] = useState("past");
    const navigate = useNavigate();

    return (
        <Grid
        sx={{
            backgroundColor: "#d8edffff",
            height: "45rem",
        }}
        >
            {/* <Grid size={12} textAlign="center" sx={{paddingTop: "2rem"}}>
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
            </Grid> */}
            {/* Back to Home */}
            <button 
            className="flex items-center gap-2 px-4 py-2 text-sky-900 rounded-lg hover:bg-sky-100"
            onClick={() => navigate("/")}>
                <span className="text-lg">‹</span>
                <span>Back to Home</span>
            </button>

            {/* Title */}
            <header className="text-center">
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-sky-900 tracking-tight">
                    My Portfolio
                </h1>
            </header>

            {/* Carousel */}
            <PortfolioCarousel />
        </Grid>
    )
}

export default Portfolio;