import { Container, Card, CardContent, Grid, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { postShow, postHide } from "../store/post";
import React, { useState, useEffect } from "react";

const PostList = () => {
	const user = useSelector((state) => state.user);
	const post = useSelector((state) => state.post);

	const [posts, setPosts] = useState([]);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(postShow(user.userId));
		console.log("gd");
	}, [user.userId]);

	console.log(post);

	return <div>{console.log(post.arr)}</div>;
};

// <div>
//         <Container component="article" xs={8}>
//             <Card variant="outlined" sx={{ minWidth: 275, mb:1 }}>
//                 <CardContent>
//                     <Grid container spacing={0.5}>
//                         <Grid item>
//                             <Typography variant="h5" sx={{ fontSize: 14, position: "relative" }} color="text.secondary">
//                                 Title:
//                             </Typography>
//                         </Grid>
//                         <Grid item>
//                             <Typography variant="h6" sx={{ position: "relative", top: -7 }}>
//                                 {post.userId}
//                             </Typography>
//                         </Grid>
//                     </Grid>
//                     <Grid container>
//                         <Typography variant="body2">well meaning and kindly.</Typography>
//                     </Grid>
//                 </CardContent>
//             </Card>
//         </Container>
//     </div>

/**
 *
 *  condition && return <div></div>
 *
 *  condition ? first div : null
 */
export default PostList;
