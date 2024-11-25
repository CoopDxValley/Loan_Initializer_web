// types.ts
export interface Loans {
  loan_types: { name: string; description: string }[];
}

// api.ts
export const getLoanTypes = async (): Promise<Loans> => {
  //   const response = await fetch("/api/retu");
  return {
    loan_types: [
      {
        name: "CAR LOANS",
        description:
          "Got your eye on that new or used vehicle? Our auto loan can help get you out on the road.",
      },
      {
        name: "CAR LOANS",
        description:
          "Got your eye on that new or used vehicle? Our auto loan can help get you out on the road.",
      },
      {
        name: "CAR LOANS",
        description:
          "Got your eye on that new or used vehicle? Our auto loan can help get you out on the road.",
      },
    ],
  };
};
