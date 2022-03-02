import {Container, Card, CardContent, Grid, Typography} from '@mui/material'
import { useDispatch, useSelector } from "react-redux";
import { postShow, postHide } from "../store/post";
import React, { useState, useEffect } from "react";

const PostList = () => {
    const user = useSelector((state) => state.user);
    const post = useSelector((state) => state.post.post);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(postShow(user.userId));
    }, [user.userId]);
    const result = post && post.map((item)=>{
        return <div key={item.id}>
            <Container component="article" xs={8}>
                <Card variant="outlined" sx={{ minWidth: 275, mb:1 }}>
                    <CardContent>
                        <Grid container spacing={0.5}>
                            <Grid item>
                                <Typography variant="h5" sx={{ fontSize: 14, position: "relative" }} color="text.secondary">
                                    Title:
                                </Typography>
                            </Grid>
                            <Grid item>
                                <Typography variant="h6" sx={{ position: "relative", top: -7 }}>
                                    {item.title}
                                </Typography>
                            </Grid>
                        </Grid>
                        <Grid container>
                            <Typography variant="body2" sx={{ textAlign: "left"}}>{item.body}</Typography>
                        </Grid>
                    </CardContent>
                </Card>
            </Container>
        </div>
    })
    return (<div>{result}</div>);
}
export default PostList;