import { NextApiRequest, NextApiResponse } from "next";
import { shipengine } from "@/lib/shipEngine";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    try {
      const { address } = req.body;
      const validation = await shipengine.validateAddresses(address);
      res.status(200).json(validation);
    } catch (error: unknown) {
      if (error instanceof Error) {
        res.status(500).json({ error: error.message });
      } else {
        res.status(500).json({ error: "An unknown error occurred" });
      }
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
