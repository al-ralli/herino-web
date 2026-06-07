export const ENDPOINTS = {
  auth: {
    login: () => "/auth/login",
    register: () => "/auth/register",
    me: () => "/users/me",
  },
  properties: {
    list: () => "/properties",
    detail: (id: string) => `/properties/${id}`,
  },
  surveillances: {
    list: () => "/surveillances",
    detail: (id: string) => `/surveillances/${id}`,
    byProperty: (propertyId: string) => `/surveillances/property/${propertyId}`,
    create: () => "/surveillances",
  },
  passages: {
    detail: (id: string) => `/passages/${id}`,
    emergency: () => "/passages/emergency",
    createReport: (id: string) => `/passages/${id}/reports`,
  },
  alerts: {
    list: () => "/alerts",
    detail: (id: string) => `/alerts/${id}`,
  },
  pricing: {
    estimate: () => "/pricing/estimate",
  },
} as const;
