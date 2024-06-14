export type Tool = {
  name: string;
  image: string | null;
  usage: string;
};

export type Client = {
  companyName: string;
  companyLogo: string;
  current: boolean;
  start_date: string;
  end_date: string;
  tech_tags: string[];
  role: string;
  description: string;
};
