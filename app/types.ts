export type Tool = {
  name: string;
  image: string | null;
  usage: string;
};

export type Client = {
  companyName: string;
  companyLogo: string;
  current: boolean;
  role: string;
  description: string;
};
