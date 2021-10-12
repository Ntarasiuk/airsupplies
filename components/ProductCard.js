import { Card, Image, Link, Text } from "@geist-ui/react";
import NextLink from "next/link";
import React from "react";

const ProductCard = ({
  width = "400px",
  height = "200px",
  image,
  url,
  description,
  title,
  subtitle,
}) => (
  <NextLink target="_blank" href={url}>
    <Link style={{ width: "100%" }}>
      <Card width="100%">
        <Image src={image} height={height} alt={title} draggable={false} />
        <Text h4 mb={0}>
          {title}
        </Text>
        <Text type="secondary" small>
          {subtitle}
          {description ? (
            <div dangerouslySetInnerHTML={{ __html: description }} />
          ) : null}
        </Text>
        <Card.Footer>
          <Link block target="_blank" href={`${url}?tag=airbundles-20`}>
            Details
          </Link>
        </Card.Footer>
      </Card>
    </Link>
  </NextLink>
);

export default ProductCard;
