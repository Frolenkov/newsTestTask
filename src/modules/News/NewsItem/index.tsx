import { Grid, Typography, Button } from "@mui/material"
import { useTranslation } from "react-i18next";
import { IPost } from "../../../common/models"

const NewsItem = ({ post, removeHandler }: { post: IPost, removeHandler: (post: IPost) => void }) => {
    const { t } = useTranslation();
    return (
        <Grid
            container direction="column"
            justifyContent="space-between"
            sx={{ height: '250px', maxWidth: '500px', boxShadow: 1, p: "10px", m: "10px" }}>
            <Typography fontSize={20} mb={2}>
                {post.title}
            </Typography>
            <Typography mb={2}>
                {post.body}
            </Typography>
            <Button variant="outlined" color="error" onClick={() => removeHandler(post)}>
                {t("delete")}
            </Button>
        </Grid>
    )
}

export default NewsItem;