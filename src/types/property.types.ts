export interface Property {
  id: string;
  label: string;
  streetNumber: string;
  streetName: string;
  city: string;
  postalCode: string;
  lat: number;
  lng: number;
  accessInfo: string | null;
  notes: string | null;
  clientId: string;
  createdAt: string;
  updatedAt: string;
}
