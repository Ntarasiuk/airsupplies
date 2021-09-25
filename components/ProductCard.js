import { Card, Image, Link, Text } from "@geist-ui/react";
import React from "react";

function ProductCard({
  width = "400px",
  height = "200px",
  image,
  url,
  description,
  title,
  subtitle,
}) {
  return (
    <Card width="400px">
      <Image
        src={image}
        height={height}
        alt={title}
        width={width}
        draggable={false}
      />
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
        <Link block target="_blank" href={url}>
          Add to cart
        </Link>
      </Card.Footer>
    </Card>
  );
}

export default ProductCard;
