import { NextApiRequest, NextApiResponse } from "next";
import shipengine from "@/lib/shipEngine";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    try {
      const { address } = req.body;
      const validation = await shipengine.validateAddress(address);
      res.status(200).json(validation);
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
