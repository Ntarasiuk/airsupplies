import { Card, Grid, Image, Link, Rating, Text } from "@geist-ui/react";
import NextLink from "next/link";
import React from "react";
function SetCard({
  width = "400px",
  height = "200px",
  image,
  link,
  title,
  content,
  btnText,
  stars,
  showStars,
  badge,
}) {
  return (
    <NextLink target="_blank" href={link}>
      <Link>
        <Card width={width}>
          <Image
            src={image}
            height={height}
            alt="thing"
            width={width}
            draggable={false}
          />
          <Grid.Container gap={2}>
            <Grid md={12} xs>
              {showStars ? (
                <Rating value={stars} locked type="warning" />
              ) : null}
            </Grid>
            <Grid md={12} xs justify="flex-end">
              {badge}
            </Grid>
          </Grid.Container>

          <Text h4 mb={0}>
            {title}
          </Text>
          <Text type="secondary" small>
            {content}{" "}
          </Text>
          <Card.Footer>
            <Link block>{btnText} </Link>
          </Card.Footer>
        </Card>
      </Link>
    </NextLink>
  );
}

export default SetCard;
