import axios from "axios";

// types.ts
export interface Requirements {
  requirements: String[];
}

export interface Purpose {
  purpose: { id: string; title: string }[];
}

// api.ts
export const getRequirements = async (): Promise<Requirements> => {
  const response = await axios.get(
    "http://localhost:4000/api/requirement/getRequirements"
  );
  const requirements = response.data;
  return {
    requirements,
  };
};

export const getPurpose = async (): Promise<Purpose> => {
  const response = await axios.get(
    "http://localhost:4000/api/purpose/getPurposes"
  );
  const purpose = response.data;
  return {
    purpose,
  };
};
