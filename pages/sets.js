import { useQuery } from "@apollo/client";
import { Badge, Grid, Spacer, useTheme } from "@geist-ui/react";
import gql from "graphql-tag";
import React from "react";
import Layout from "../components/Layout";
import SetCard from "../components/SetCard";

function SetPage() {
  const theme = useTheme();

  const { data, loading, error } = useQuery(gql`
    {
      set {
        id
        cover_image
        description
        subtitle
        title
        is_airbnb_plus
        category {
          slug
          description
          name
        }
      }
    }
  `);

  const setData = data?.set || [];
  return (
    <Layout>
      <h4>Bathroom Supplies</h4>
      <hr />
      <Grid.Container gap={2}>
        {setData?.map((set) => (
          <Grid md={12} xs key={set?.id}>
            <SetCard
              image={set?.cover_image}
              title={set?.title}
              content={set?.subtitle}
              btnText="Check out the list"
              stars={5}
              link={`/sets/${set?.category.slug}/${set?.id}`}
              showStars={false}
              badge={
                set?.is_airbnb_plus ? (
                  <>
                    <Spacer w={0.5} />
                    <Badge style={{ backgroundColor: theme.palette.alert }}>
                      Airbnb Plus
                    </Badge>
                  </>
                ) : null
              }
            />
          </Grid>
        ))}
      </Grid.Container>
    </Layout>
  );
}

export default SetPage;
