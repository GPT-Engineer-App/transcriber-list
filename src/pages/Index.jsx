import React, { useState } from "react";
import { FaCheck, FaTimes, FaRedo } from "react-icons/fa";

const transcriptions = [
  { id: 1, name: "Transcription 1", date: "2023-05-01", size: 2.5, summary: "Lorem ipsum dolor sit amet", status: "success" },
  { id: 2, name: "Transcription 2", date: "2023-05-02", size: 0, summary: "", status: "failed", failureReason: "transcription" },
  { id: 3, name: "Transcription 3", date: "2023-05-03", size: 1.8, summary: "Consectetur adipiscing elit", status: "success" },
  { id: 4, name: "Transcription 4", date: "2023-05-04", size: 0, summary: "", status: "failed", failureReason: "chatgpt4" },
  { id: 5, name: "Transcription 5", date: "2023-05-05", size: 3.2, summary: "Sed do eiusmod tempor incididunt", status: "success" },
  { id: 6, name: "Transcription 6", date: "2023-05-06", size: 0, summary: "", status: "failed", failureReason: "transcription" },
  { id: 7, name: "Transcription 7", date: "2023-05-07", size: 2.1, summary: "Ut labore et dolore magna aliqua", status: "success" },
  { id: 8, name: "Transcription 8", date: "2023-05-08", size: 0, summary: "", status: "failed", failureReason: "chatgpt4" },
  { id: 9, name: "Transcription 9", date: "2023-05-09", size: 1.5, summary: "Ut enim ad minim veniam", status: "success" },
  { id: 10, name: "Transcription 10", date: "2023-05-10", size: 2.8, summary: "Quis nostrud exercitation ullamco", status: "success" },
];

const Index = () => {
  const [transcriptionList, setTranscriptionList] = useState(transcriptions);

  const handleRerun = (id) => {
    // Simulating re-running the transcription
    const updatedList = transcriptionList.map((transcription) => {
      if (transcription.id === id) {
        return { ...transcription, size: Math.random() * 5, summary: "Re-run successful", status: "success" };
      }
      return transcription;
    });
    setTranscriptionList(updatedList);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Transcription List</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {transcriptionList.map((transcription) => (
          <div key={transcription.id} className="bg-white rounded-lg shadow-md p-4">
            <h2 className="text-xl font-bold mb-2">{transcription.name}</h2>
            <p className="text-gray-500 mb-2">{transcription.date}</p>
            <p className="text-gray-500 mb-2">Size: {transcription.size} MB</p>
            <p className="text-gray-700 mb-4">{transcription.summary}</p>
            <div className="flex items-center mb-2">
              <span className="mr-2">Status:</span>
              {transcription.status === "success" ? <FaCheck className="text-green-500" /> : <FaTimes className="text-red-500" />}
            </div>
            {transcription.status === "failed" && (
              <div className="flex items-center mb-2">
                <span className="mr-2">Failure Reason:</span>
                <span className="text-red-500">{transcription.failureReason}</span>
              </div>
            )}
            {transcription.size === 0 && (
              <button className="bg-blue-500 text-white px-4 py-2 rounded-md" onClick={() => handleRerun(transcription.id)}>
                <FaRedo className="inline-block mr-2" />
                Re-run
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Index;
