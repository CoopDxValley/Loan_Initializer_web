import axios from "axios";

// types.ts
interface Loans {
  id: string;
  type: string;
  amount: number;
  status: string;
  date: string;
  applicant: string;
  purpose: string;
  interestRate: number;
  term: number;
}

type LoanStage = {
  name: string;
  status: "completed" | "in-progress" | "pending";
};

type LoanMessage = {
  message: string;
  date: string;
};

// apis.ts
export const getLoanDetail = async (parameters: any): Promise<Loans> => {
  const response = await axios.get(
    `http://localhost:3000/api/loans/${parameters}`
  );
  if (response.status !== 200) {
    throw new Error("Failed to fetch Loan Detail");
  }
  return response.data;
};

export const getLoanStages = async (parameters: any): Promise<LoanStage[]> => {
  const response = await axios.get(
    `http://localhost:3000/api/loans/stages/${parameters}`
  );
  if (response.status !== 200) {
    throw new Error("Failed to fetch Loan Stage");
  }
  return response.data;
};

export const getLoanMessage = async (parameters: any): Promise<LoanMessage> => {
  const response = await axios.get(
    `http://localhost:3000/api/loans/message/${parameters}`
  );
  if (response.status !== 200) {
    throw new Error("Failed to fetch Loan Stage");
  }
  return response.data;
};

export const uploadFile = async (file: any, loanId: any): Promise<any> => {
  try {
    // Construct the form data
    const formData: any = new FormData();
    formData.append("file", {
      uri: file.uri,
      name: file.name || "upload.jpg",
      type: file.type || "image/jpeg",
    });

    // Configure Axios request
    const response = await axios.post(
      `http://localhost:3000/api/loans/message/${loanId}`,
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );

    return response.data;
  } catch (error: any) {
    console.error("Error uploading file:", error);
    if (error.response) {
      throw new Error(
        `Upload failed with status ${error.response.status}: ${error.response.data}`
      );
    } else if (error.request) {
      throw new Error("Upload failed: No response from server");
    } else {
      throw new Error(`Upload failed: ${error.message}`);
    }
  }
};
