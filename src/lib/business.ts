export const business = {
  name: "FrosTex Air Conditioning & Heating LLC",
  shortName: "FrosTex",
  owner: "Federico Cantu",
  phoneDisplay: "(956) 776-7366",
  phoneTel: "+19567767366",
  email: "contact@frostexairconditioning.com",
  street: "33102 W FM 681",
  city: "Edinburg",
  state: "Texas",
  zip: "78541",
  license: "TACLB164727E",
  mapsHref:
    "https://www.google.com/maps/search/?api=1&query=33102+W+FM+681%2C+Edinburg%2C+Texas+78541",
} as const;

export const addressLine = `${business.street}, ${business.city}, ${business.state} ${business.zip}`;
export const telHref = `tel:${business.phoneTel}`;
export const smsHref = `sms:${business.phoneTel}`;
export const mailHref = `mailto:${business.email}`;

export const PLAUSIBLE_DOMAIN = "frostex-demo-preview.workers.dev";
