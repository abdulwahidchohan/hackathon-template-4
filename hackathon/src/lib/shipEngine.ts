import ShipEngine from "shipengine";

export const shipengine = new ShipEngine({
  apiKey: process.env.SHIPENGINE_API_KEY as string,
});

export async function createShipmentLabel(shipment) {
  try {
    const label = await shipengine.createLabelAsync(shipment);
    return label;
  } catch (error) {
    console.error("Error creating label:", error);
    throw error;
  }
}