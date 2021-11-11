import { Link, Text } from "@geist-ui/react";
import React from "react";

function Suggestions() {
  return (
    <Text h3>
      Have suggestions?{" "}
      <Link
        href="mailto:suggest@airbundles.com?subject=I%20have%20a%20suggestion%20for%20you!"
        color
        underline
      >
        Send them here.
      </Link>
    </Text>
  );
}

export default Suggestions;
