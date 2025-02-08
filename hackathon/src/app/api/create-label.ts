import { NextApiRequest, NextApiResponse } from "next";
import { shipengine } from "@/lib/shipEngine";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    try {
      const { shipment } = req.body;
      const label = await shipengine.createLabelFromShipmentDetails(shipment);
      res.status(200).json(label);
    } catch (error: unknown) {
      const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred';
      res.status(500).json({ error: errorMessage });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}