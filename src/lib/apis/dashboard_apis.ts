// types.ts
export interface Requirements {
  requirements: String[];
}

export interface Purpose {
  purpose: { id: string; title: string }[];
}

// api.ts
export const getRequirements = async (): Promise<Requirements> => {
  return {
    requirements: [
      "18+ years",
      "A permanent resident or citizen of ET",
      "Earning a stable income",
    ],
  };
};

export const getPurpose = async (): Promise<Purpose> => {
  return {
    purpose: [
      { id: "grow", title: "Growing My Business" },
      { id: "grow1", title: "Growing My Business" },
      { id: "grow2", title: "Growing My Business" },
      { id: "grow3", title: "Growing My Business" },
    ],
  };
};
