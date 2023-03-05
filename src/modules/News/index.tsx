import { useState } from "react";
import { Grid, Button, Typography, Alert } from "@mui/material";
import { useTranslation } from "react-i18next";
import { useDeletePostMutation, useGetNewsQuery } from "../../store/github/news.api";
import NewsItem from "./NewsItem";
import { NUMBER_OF_NEWS } from "../../common/constants";
import { IPost } from "../../common/models";

const News = () => {
    const [limit, setLimit] = useState<number>(NUMBER_OF_NEWS)
    const { data, isLoading, isError: isLoadingError } = useGetNewsQuery(limit);
    const [deletePost, { isError: isDeleteError }] = useDeletePostMutation();
    const { t } = useTranslation();

    const handleDelete = (post: IPost) => {
        deletePost(post.id)
    }
    return (
        <>{
            isLoading ?
                <Typography mb={2}>
                    {t("loading")}
                </Typography> :
                <>
                    {isLoadingError && <Alert sx={{ m: "40px" }}>{t("loadingError")}</Alert>}
                    {isDeleteError && <Alert sx={{ m: "40px" }}>{t("simpleError")}</Alert>}
                    <Grid px={5} container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                        {data?.map(post => <NewsItem key={post?.id} post={post} removeHandler={handleDelete} />)}
                    </Grid>
                    <Button sx={{ m: "40px" }} variant="contained" color="secondary" onClick={() => setLimit(prev => prev + NUMBER_OF_NEWS)}>
                        {t("getMoreNews")}
                    </Button>
                </>
        }
        </>
    )
}

export default News;