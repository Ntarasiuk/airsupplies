// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default async function handler(req, res) {
  try {
    const options = {
      headers: headers,
      method: "POST",
      body: JSON.stringify(args[0]),
    };
    const res = await fetch(GRAPHQL_ENDPOINT, options);
    const request = await fetch(
      "https://airsupplies.herokuapp.com/v1/graphql",
      {
        ...req,
        method: "post",
        body: req.body,
      }
    ).then((value) => value.json());

    if (request.errors) {
      res.status(500).send(request.errors);
    }

    res.status(200).json(request);
  } catch (error) {
    res.status(500).send(error);
  }
}
