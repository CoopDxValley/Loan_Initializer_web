// types.ts

import axios from "axios";

type ScheduleMeetingRequest = {
  date: string; // Format: "yyyy-mm-dd", e.g., "2024-12-25"
  time: string; // Format: "HH:mm", e.g., "14:30"
  purpose: string; // Brief description of the meeting
};

type FundPullingRequest = {
  sourceBank: string; // The name of the source bank
  amount: string; // The amount to transfer
  purpose: string; // Description of the transfer purpose
};

type RMPerformanceFeedbackRequest = {
  rating: number; // Rating provided by the user (e.g., 1-5 stars)
  feedback: string; // Detailed textual feedback
};

export const setMeeting = async (details: ScheduleMeetingRequest) => {
  const data = {
    date: details.date,
    time: details.time,
    purpose: details.purpose,
  };

  const response = await axios.post(`http://localhost:3000/api/meeting`, data, {
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (response.status !== 200) {
    throw new Error("Failed to set meeting");
  }
  return response.data;
};

export const pullFunds = async (details: FundPullingRequest) => {
  const data = {
    sourceBank: details.sourceBank,
    amount: details.amount,
    purpose: details.purpose,
  };

  const response = await axios.post(`http://localhost:3000/api/funds`, data, {
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (response.status !== 200) {
    throw new Error("Failed to pull funds");
  }
  return response.data;
};

export const setRating = async (details: RMPerformanceFeedbackRequest) => {
  const data = {
    rating: details.rating,
    feedback: details.feedback,
  };

  const response = await axios.post(`http://localhost:3000/api/rating`, data, {
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (response.status !== 200) {
    throw new Error("Failed to give ratings");
  }
  return response.data;
};
