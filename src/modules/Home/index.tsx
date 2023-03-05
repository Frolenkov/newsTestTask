import { Container, Typography, Grid, Button } from "@mui/material"
import Form from "./AuthForm";
import { useAppSelector } from "../../hooks/redux";
import { authSelector } from "./selectors";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Home = () => {
    const { isAuth } = useAppSelector(authSelector);
    const { t, i18n } = useTranslation();
    const changeLanguage = (language: string) => {
        i18n.changeLanguage(language);
    }
    return (
        <>
            <Grid container justifyContent="space-around" spacing={2} sx={{
                backgroundColor: 'primary.light',
                p: 2
            }}>
                <Container maxWidth="sm">
                    <Grid
                        justifyContent="space-between"
                        alignItems="center"
                        container
                        py={2}
                        >
                        <Grid container item xs={8}>
                            <Link to={"/"} ><Typography pr={2} component="h3" variant="h5" color={"#fff"}>{t("home")} </Typography></Link>
                            <Link to={"/news"} ><Typography pr={2} component="h3" variant="h5" color={"#fff"}>{t("news")} </Typography></Link>
                            <Link to={"/profile"}><Typography pr={2} component="h3" variant="h5" color={"#fff"}>{t("profile")}</Typography></Link>
                        </Grid>
                        <Grid container item xs={3}  justifyContent="space-between">
                            <Button variant="contained" size="small" onClick={() => changeLanguage("en")}>EN</Button>
                            <Button variant="contained" color="secondary" size="small" onClick={() => changeLanguage("ua")}>UA</Button>
                        </Grid>
                    </Grid>
                </Container >
            </Grid>
            <Container maxWidth="sm">
                {isAuth ?
                    <Typography component="h1" variant="h2" mb={2}>
                        {t("welcome")}
                    </Typography>
                    :
                    <Form />
                }
            </Container>
        </>)
}

export default Home;