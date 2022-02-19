import {Container, Card, CardContent, Grid, Typography} from '@mui/material'

const PostList = () => {
    return (
        <div>
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
                                    dfdfaddffdfdfghsf
                                </Typography>
                            </Grid>
                        </Grid>
                        <Grid container>
                            <Typography variant="body2">well meaning and kindly.</Typography>
                        </Grid>
                    </CardContent>
                </Card>
            </Container>
        </div>
    );
}

export default PostList;