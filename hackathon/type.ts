// Define types for the API response
export interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
  color: string;
  size: string;
};
  export type unit = "ounce" | "gram" | "kilogram" | "pound";
  export type dimensionUnit = "inch" | "centimeter";
  
  export type Package = {
    weight: {
      value: number;
      unit: unit;
    };
    dimensions: {
      height: number;
      width: number;
      length: number;
      unit: dimensionUnit;
    };
  };
  
  export type Rate = {
    rateId: string;
    rateType: string;
    carrierId: string;
    shippingAmount: {
      currency: string;
      amount: number;
    };
    serviceType: string;
    serviceCode: string;
    trackable: boolean;
    carrierFriendlyName: string;
    validationStatus: string;
    warningMessages?: string[];
  };
  
  
  export interface trackingObjType {
    trackingNumber: string;
    labelId: string;
    carrierCode: string;
  }
  
  export interface TrackingData {
    trackingNumber?: string;
    statusDescription?: string;
    carrierStatusDescription?: string;
    estimatedDeliveryDate?: string;
    actualDeliveryDate?: string;
  }