import React, { useState } from "react";
import { createClient } from "@supabase/supabase-js";

const supabaseUrl: string = "https://yuumtxoddxjciwahmdrj.supabase.co";
const supabaseKey: string = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inl1dW10eG9kZHhqY2l3YWhtZHJqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzg4MzY2MjgsImV4cCI6MjA1NDQxMjYyOH0.-wJE7PXyW-D_FPRGSwOrl6YuwP0IGvKiTeiesFW2dQY";
const supabase = createClient(supabaseUrl, supabaseKey);

interface DataCollectionModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const DataCollectionModal: React.FC<DataCollectionModalProps> = ({ isOpen, onClose }) => {
  const [name, setName] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [place, setPlace] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    const { error } = await supabase.from("users").insert([{ name, phone, place }]);
    
    if (error) {
      alert("Error submitting data");
    } else {
      alert("Data submitted successfully");
      setName("");
      setPhone("");
      setPlace("");
      onClose();
    }
    setLoading(false);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        <h2 className="text-xl font-semibold mb-4">Enter Your Details</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-2 border rounded mb-2"
            required
          />
          <input
            type="tel"
            placeholder="Your Phone Number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="w-full p-2 border rounded mb-2"
            required
          />
          <input
            type="text"
            placeholder="Your Place"
            value={place}
            onChange={(e) => setPlace(e.target.value)}
            className="w-full p-2 border rounded mb-4"
            required
          />
          <div className="flex justify-between">
            <button
              type="button"
              className="bg-gray-400 text-white px-4 py-2 rounded"
              onClick={onClose}
              disabled={loading}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded"
              disabled={loading}
            >
              {loading ? "Submitting..." : "Submit"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default DataCollectionModal;