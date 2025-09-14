import Grid from '@mui/material/Grid';
import PortfolioCarousel from '../components/PortfolioCarousel';
import NavBar from '../components/NavBar';


const Buildings = () => {
    // const [eventState, setEventState] = useState("past");

    return (
        <Grid
        sx={{
            backgroundColor: "#f1f9ffff",
            height: "45rem",
        }}
        >
            {/* Nav Bar */}
            <NavBar />

            {/* Title */}
            <header className="text-center mx-auto max-w-7xl px-4 py-2 sm:px-6 lg:px-8">
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-sky-900 tracking-tight">
                    My Portfolio
                </h1>

                <p className="mt-2 text-lg text-sky-900">
                    A collection of my structural design projects as a graduate structural engineer <br/>@MMHK Design, Construction and Consultancy Firm
                </p>
            </header>

            {/* Carousel */}
            <PortfolioCarousel />
        </Grid>
    )
}

export default Buildings;