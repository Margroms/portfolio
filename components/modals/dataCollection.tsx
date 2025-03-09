import React, { useState } from "react";
import { createClient } from "@supabase/supabase-js";
import { X } from "lucide-react";
import Link from "next/link";

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
      setName("");
      setPhone("");
      setPlace("");
      onClose();
    }
    setLoading(false);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center p-4">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-sm relative">
        <Link href="/">
          <button className="absolute top-5 right-5 text-black text-lg">
            <X size={24} />
          </button>
        </Link>
        <h2 className="text-xl font-semibold mb-4 text-center">Enter Your Details</h2>
        <form onSubmit={handleSubmit} className="flex flex-col space-y-3">
          <input
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-2 border rounded"
            required
          />
          <input
            type="tel"
            placeholder="Your Phone Number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="w-full p-2 border rounded"
            required
          />
          <input
            type="text"
            placeholder="Your Place"
            value={place}
            onChange={(e) => setPlace(e.target.value)}
            className="w-full p-2 border rounded"
            required
          />
          <button
            type="submit"
            className="py-2 px-4 text-lg hover:bg-[#FFB982] rounded-[6px] border-2 border-black text-white bg-[#121212] transition duration-200 mx-auto block hover:shadow-[1px_1px_rgba(0,0,0),2px_2px_rgba(0,0,0),3px_3px_rgba(0,0,0),4px_4px_rgba(0,0,0),5px_5px_0px_0px_rgba(0,0,0)] dark:shadow-[1px_1px_rgba(255,255,255),2px_2px_rgba(255,255,255),3px_3px_rgba(255,255,255),4px_4px_rgba(255,255,255),5px_5px_0px_0px_rgba(255,255,255)]"
            disabled={loading}
          >
            {loading ? "Submitting..." : "Submit"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default DataCollectionModal;