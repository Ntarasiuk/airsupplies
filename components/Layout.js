import { Grid, Page } from "@geist-ui/react";
import Link from "next/link";
import React from "react";
import styles from "styles/Home.module.css";

function Layout({ children }) {
  return (
    <div>
      <Page className={styles.page}>
        <Page.Header>
          <Grid.Container gap={2} justify="center">
            <Grid md={12} xs>
              <Link href="/" passHref>
                <a style={{ color: "black", textDecoration: "none" }}>
                  <h2>☁ AirSupplies</h2>
                </a>
              </Link>
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
                <a style={{ color: "black" }} href="mailto:ntarasiuk@gmail.com">
                  <h2>Email</h2>
                </a>
              </div>
            </Grid>
          </Grid.Container>
        </Page.Header>
        <Page.Content>{children}</Page.Content>
        <Page.Footer>{/* <h2>Contact</h2>  */}</Page.Footer>
      </Page>
    </div>
  );
}

export default Layout;
