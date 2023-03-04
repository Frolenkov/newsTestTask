import { useState } from "react";
import { Grid, Button, Typography } from "@mui/material";
import { useDeletePostMutation, useGetNewsQuery } from "../../store/github/news.api";
import NewsItem from "./NewsItem";
import { NUMBER_OF_NEWS } from "../../common/constants";
import { IPost } from "../../common/models";

const News = () => {
    const [limit, setLimit] = useState<number>(NUMBER_OF_NEWS)
    const { data, isLoading } = useGetNewsQuery(limit);
    const [deletePost, {}] = useDeletePostMutation();
    console.log(data)

    const handleDelete = (post: IPost) => {
        deletePost(post.id)
    }
    return (
        <>{
            isLoading ?
                <Typography mb={2}>
                    Loading...
                </Typography> :
                <>
                <Grid px={5} container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    {data?.map(post => <NewsItem key={post?.id} post={post} removeHandler={handleDelete}/>)}
                   
                </Grid>
                 <Button sx={{ m: "40px" }} variant="contained" color="secondary" onClick={()=>setLimit(prev => prev + NUMBER_OF_NEWS)}>
                 Get more news
             </Button>
             </>
        }
        </>
    )
}

export default News;