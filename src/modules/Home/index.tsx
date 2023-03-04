import { Container, Typography, Grid } from "@mui/material"
import Form from "./AuthForm";
import { useAppSelector } from "../../hooks/redux";
import { authSelector } from "./selectors";
import { Link } from "react-router-dom";

const Home = () => {
    const { isAuth } = useAppSelector(authSelector);
    return (
        <Container maxWidth="sm">
            {isAuth ?
                <Typography component="h1" variant="h2" mb={2}>
                    Welcome
                </Typography>
                :
                <Form />
            }
            <Grid container justifyContent="space-around" spacing={2}>
                <Typography component="h3" variant="h5">
                    <Link to={"/"} >Home</Link>
                </Typography>
                <Typography component="h3" variant="h5">
                <Link to={"/news"} >News</Link>
                </Typography>
                {<Typography component="h3" variant="h5">
                <Link to={"/profile"} >Profile</Link>
                </Typography>
                }
            </Grid>
        </Container>)
}

export default Home;