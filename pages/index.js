import { Button } from "@geist-ui/react";
import Layout from "../components/Layout";

export default function Home() {
  return (
    <Layout>
      <h2>Hello, Everyone.</h2>
      <p>This is a simulated page, you can click anywhere to close it.</p>
      <Button>Click Me</Button>
    </Layout>
  );
}
