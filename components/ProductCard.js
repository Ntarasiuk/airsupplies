import { Card, Image, Link, Text } from "@geist-ui/react";
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
  <Link
    style={{ width: "100%" }}
    target="_blank"
    href={`${url}?tag=airbundles-20`}
  >
    <Card width="100%" shadow mt={2}>
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
);

export default ProductCard;
