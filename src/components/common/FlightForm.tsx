import { useState } from "react";
import axios from "axios";

const FlightForm = () => {
  const [form, setForm] = useState({
    from: "",
    to: "",
    date: "",
    passengers: "",
    contact: "",
    name: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:3001/submit", form);
      alert("Booking submitted!");
      setForm({ from: "", to: "", date: "", passengers: "", contact: "", name: "" });
    } catch (error) {
      console.error("Submit failed", error);
      alert("Failed to submit booking.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flight-form">
      <h2>Book Your Flight</h2>

      <label>
        Flying From:
        <select name="from" value={form.from} onChange={handleChange} required>
          <option value="">Select</option>
          <option value="Mumbai">Mumbai</option>
          <option value="Delhi">Delhi</option>
        </select>
      </label>

      <label>
        Flying To:
        <select name="to" value={form.to} onChange={handleChange} required>
          <option value="">Select</option>
          <option value="Bali">Bali</option>
          <option value="Singapore">Singapore</option>
        </select>
      </label>

      <label>
        Depart Date:
        <input type="date" name="date" value={form.date} onChange={handleChange} required />
      </label>

      <label>
        Passenger Name:
        <input type="text" name="name" value={form.name} onChange={handleChange} required />
      </label>

      <label>
        No of Passengers:
        <input type="number" name="passengers" value={form.passengers} onChange={handleChange} required />
      </label>

      <label>
        Contact No:
        <input type="tel" name="contact" value={form.contact} onChange={handleChange} required />
      </label>

      <button type="submit">Submit</button>
    </form>
  );
};

export default FlightForm;
