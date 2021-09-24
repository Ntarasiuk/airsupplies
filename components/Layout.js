import { Grid, Page } from "@geist-ui/react";
import { request } from "graphql-request";
import React from "react";
import { SWRConfig } from "swr";

function Layout({ children }) {
  return (
    <SWRConfig
      value={{
        refreshInterval: 3000,
        fetcher: (query) => request("/api/graphql", query),
      }}
    >
      <Page>
        <Page.Header>
          <Grid.Container gap={2} justify="center">
            <Grid md={12} xs>
              ☁ <h2>AirSupplies</h2>
            </Grid>
            <Grid
              md={12}
              xs
              width="100%"
              style={{
                justifyContent: "end",
              }}
            >
              <div>
                <h2>Email</h2>
              </div>
            </Grid>
          </Grid.Container>
        </Page.Header>
        <Page.Content>{children}</Page.Content>
        <Page.Footer>
          <h2>Footer</h2>
        </Page.Footer>
      </Page>
    </SWRConfig>
  );
}

export default Layout;
