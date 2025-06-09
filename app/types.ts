export type Tool = {
  name: string;
  image?: string;
  usage: string;
};

export type Computer = {
  name: string;
  description: string;
  image?: string;
};

export type Experience = {
  companyName: string;
  companyLogo: string;
  current: boolean;
  start_date: string;
  end_date: string;
  tech_tags: string[];
  role: string;
  description: string;
};
