export type TimeSlot = "MORNING" | "AFTERNOON" | "EVENING" | "NIGHT";
export type SurveillanceStatus = "ACTIVE" | "UPCOMING" | "ENDED" | "INCIDENT";

export interface SurveillanceProperty {
  id: string;
  label: string;
  streetNumber: string;
  streetName: string;
  city: string;
}

export interface Surveillance {
  id: string;
  startDate: string;
  endDate: string;
  slots: TimeSlot[];
  cctOption: boolean;
  instructions: string | null;
  pricePerDay: number;
  totalPrice: number;
  isPaid: boolean;
  invoiceNumber: string | null;
  invoiceUrl: string | null;
  propertyId: string;
  property: SurveillanceProperty;
  createdAt: string;
  updatedAt: string;
}
