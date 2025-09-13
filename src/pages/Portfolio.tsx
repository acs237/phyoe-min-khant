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

                <p className="mt-4 text-lg text-sky-900">
                    A collection of my architectural works and designs.
                </p>
            </header>

            {/* Carousel */}
            <PortfolioCarousel />
        </Grid>
    )
}

export default Portfolio;