import React, { useContext } from "react";
import { ArticleContext } from "../../context/article";
import {
  Card,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Typography,
} from "@mui/material";
const Article = () => {
  const { articles } = useContext(ArticleContext);
  return (
    <Container sx={{paddingBottom: '4em'}}>
      <Grid container spacing={16}>
        {articles.map((article, index) => (
          <Grid item xs={12} sm={6} key={index}>
            <Card sx={{ width: 550 }}>
              <CardMedia
                sx={{ height: 140 }}
                image={article.imgUrl.url}
                title={article.title}
              />
              <CardContent
                sx={{
                  overflowY: "auto",
                  height: "50vh",
                }}
              >
                <Typography
                  gutterBottom
                  variant="h5"
                  fontWeight="bold"
                  component="div"
                >
                  {article.title}
                </Typography>
                <Typography variant="p" fontSize={20}>
                  {article.content}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>

    //   {articles.map((article, index) => (
    //     <div className="card_article" key={index}>
    //       <div id="inner">
    //         <h2 id="title">{article.title}</h2>
    //         <p id="content">{article.content}</p>
    //       </div>
    //     </div>
    //   ))}
  );
};

export default Article;
