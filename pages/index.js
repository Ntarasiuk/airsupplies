import { Button, Text } from "@geist-ui/react";
import Link from "next/link";
import Layout from "../components/Layout";
export default function Home() {
  return (
    <Layout>
      <div
        style={{
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <h1>Hosting isn&apos;t easy</h1>
        <div style={{ maxWidth: 600 }}>
          <Text p font={2}>
            Whether you are a host on{" "}
            <span style={{ color: "#E61E4D" }}>Airbnb</span> or{" "}
            <span style={{ color: "#245abc" }}>VRBO</span>, finding the right
            things for your rented space is a struggle. We are making it easy to
            find what best suites you with tried and true products
          </Text>
        </div>
        <Link href="/sets" passHref>
          <Button ghost type="secondary">
            Check it out!
          </Button>
        </Link>
      </div>
    </Layout>
  );
}
