import { axiosConfig as axios } from "../axios";

// types.ts
export interface Requirements {
  requirements: String[];
}

export interface Purpose {
  purpose: { id: string; title: string }[];
}

// api.ts
export const getRequirements = async (): Promise<Requirements> => {
  const response = await axios.get("/api/requirement/getRequirements", {
    withCredentials: true,
  });
  const requirements = response.data;
  return {
    requirements,
  };
};

export const getPurpose = async (): Promise<Purpose> => {
  const response = await axios.get("/api/purpose/getPurposes", {
    withCredentials: true,
  });
  const purpose = response.data;
  return {
    purpose,
  };
};
