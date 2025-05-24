// Tripstars/backend/server.js
import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import xlsx from "xlsx";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

// Required to get __dirname in ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());

app.post("/api/book-flight", (req, res) => {
  const formData = req.body;
  const filePath = path.join(__dirname, "flightBookings.xlsx");

  let workbook, worksheet;

  if (fs.existsSync(filePath)) {
    workbook = xlsx.readFile(filePath);
    worksheet = workbook.Sheets["Bookings"];
  } else {
    workbook = xlsx.utils.book_new();
    worksheet = xlsx.utils.json_to_sheet([]);
    xlsx.utils.book_append_sheet(workbook, worksheet, "Bookings");
  }

  const existingData = xlsx.utils.sheet_to_json(worksheet);
  const updatedData = [...existingData, formData];

  const updatedSheet = xlsx.utils.json_to_sheet(updatedData);
  workbook.Sheets["Bookings"] = updatedSheet;

  xlsx.writeFile(workbook, filePath);

  res.status(200).json({ message: "Booking saved successfully to Excel." });
});

app.listen(PORT, () => {
  console.log(`✅ Backend server running at http://localhost:${PORT}`);
});
