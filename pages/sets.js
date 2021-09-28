import { useQuery } from "@apollo/client";
import { Badge, Grid, Loading, Spacer, useTheme } from "@geist-ui/react";
import gql from "graphql-tag";
import React from "react";
import Layout from "../components/Layout";
import SetCard from "../components/SetCard";

function SetPage() {
  const theme = useTheme();

  const { data, loading, error } = useQuery(gql`
    {
      category {
        slug
        description
        name
        sets {
          id
          cover_image
          description
          subtitle
          title
          is_airbnb_plus
        }
      }
    }
  `);

  const catData = data?.category || [];
  if (loading)
    return (
      <Layout>
        <Loading>Loading</Loading>
      </Layout>
    );
  return (
    <Layout>
      {catData?.map((cat) => (
        <div key={cat?.id}>
          {cat?.name ? <h4>{cat.name} Supplies</h4> : null}
          <hr />
          <Grid.Container gap={2}>
            {[...cat?.sets]?.map((set) => (
              <Grid xs={24} md={12} lg={8} xl={6} key={set?.id}>
                <SetCard
                  image={set?.cover_image}
                  title={set?.title}
                  content={set?.subtitle}
                  btnText="Check out the list"
                  stars={5}
                  link={`/sets/${cat?.slug}/${set?.id}`}
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
        </div>
      ))}
    </Layout>
  );
}

export default SetPage;
