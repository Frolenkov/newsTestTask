import { Box, Typography, Button } from "@mui/material"
import { IPost } from "../../../common/models"

const NewsItem = ({ post, removeHandler }: { post: IPost, removeHandler: (post: IPost) => void }) => {
    return (
        <Box sx={{ height: '200px', maxWidth: '500px', boxShadow: 1, p: "10px", m: "10px" }}>…
            <Typography mb={2}>
                {post.title}
            </Typography>
            <Typography mb={2}>
                {post.body}
            </Typography>
            <Button variant="outlined" color="error" onClick={() => removeHandler(post)}>
                Delete
            </Button>
        </Box>
    )
}

export default NewsItem;