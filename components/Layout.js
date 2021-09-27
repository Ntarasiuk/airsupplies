import { Grid, Page } from "@geist-ui/react";
import React from "react";

function Layout({ children }) {
  return (
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
              <a href="mailto:ntarasiuk@gmail.com">
                <h2>Email</h2>
              </a>
            </div>
          </Grid>
        </Grid.Container>
      </Page.Header>
      <Page.Content>{children}</Page.Content>
      <Page.Footer>{/* <h2>Contact</h2>  */}</Page.Footer>
    </Page>
  );
}

export default Layout;
