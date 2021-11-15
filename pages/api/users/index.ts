// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  id: string;
  name: string;
  email: string;
  created?: boolean;
};

const handler = (req: NextApiRequest, res: NextApiResponse<Data[]>) => {
  switch (req.method) {
    default:
      res.status(200).json([
        { id: "1", name: "John Doe", email: "jdoe@mail.com" },
        { id: "2", name: "David Jones", email: "djones@mail.com" },
      ]);
      break;
  }
};

export default handler;
