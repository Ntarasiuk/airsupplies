import request from "graphql-request";

export const fetcher = ({ query, variables }) =>
  request("https://airsupplies.herokuapp.com/v1/graphql", { query, variables });
