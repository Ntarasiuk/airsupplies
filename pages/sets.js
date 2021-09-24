import { Badge, Grid, Spacer, useTheme } from "@geist-ui/react";
import React from "react";
import Layout from "../components/Layout";
import SetCard from "../components/SetCard";

function SetPage() {
  const theme = useTheme();

  return (
    <Layout>
      <h4>Bathroom Supplies</h4>
      <hr />
      <Grid.Container gap={2}>
        <Grid md={12} xs>
          <SetCard
            image="https://cdn2.hubspot.net/hubfs/4129352/hotel%20bathroom%20mayfair%20king%20suite.jpg"
            title="Luxury Bathroom Set"
            content="Modern and minimalist bathroom set."
            btnText="Check out the list"
            stars={5}
            link="/sets/bathrooms/1"
            showStars
            badge={
              <>
                <Spacer w={0.5} />
                <Badge style={{ backgroundColor: theme.palette.alert }}>
                  Airbnb Plus
                </Badge>
              </>
            }
          />
        </Grid>
      </Grid.Container>
    </Layout>
  );
}

export default SetPage;
