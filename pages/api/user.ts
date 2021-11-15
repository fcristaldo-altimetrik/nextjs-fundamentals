// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  name: string;
  email: string;
  created?: boolean;
};

const handler = (req: NextApiRequest, res: NextApiResponse<Data>) => {
  switch (req.method) {
    case "POST":
      res.status(200).json({ ...req.body, created: true });
      break;

    default:
      res.status(200).json({ name: "John Doe", email: "jdoe@mail.com" });
      break;
  }
};

export default handler;
