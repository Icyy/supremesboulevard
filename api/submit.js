import { GoogleSpreadsheet } from "google-spreadsheet";
import { JWT } from "google-auth-library";

export default async function handler(req, res) {
  // Only allow POST
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Only POST method allowed" });
  }

  try {
    const { name, phone, state, message } = req.body;

    // Load environment variables
    const SERVICE_ACCOUNT_EMAIL = process.env.SERVICE_ACCOUNT_EMAIL;
    const SERVICE_ACCOUNT_KEY = process.env.SERVICE_ACCOUNT_KEY;
    const SHEET_ID = process.env.SHEET_ID;

    if (!SERVICE_ACCOUNT_EMAIL || !SERVICE_ACCOUNT_KEY || !SHEET_ID) {
      return res.status(500).json({ error: "Missing environment variables" });
    }

    // Auth setup
    const auth = new JWT({
      email: SERVICE_ACCOUNT_EMAIL,
      key: SERVICE_ACCOUNT_KEY.replace(/\\n/g, "\n"),
      scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    });

    // Initialize Google Sheet
    const doc = new GoogleSpreadsheet(SHEET_ID, auth);
    await doc.loadInfo();

    const sheet = doc.sheetsByIndex[0];

    // Write row
    await sheet.addRow({
      timestamp: new Date().toLocaleString("en-IN"),
      Name: name,
      Phone: phone,
      State: state,
      Message: message,
    });

    return res.status(200).json({ status: "success" });
  } catch (error) {
    console.error("GOOGLE SHEETS ERROR:", error);
    return res.status(500).json({
      error: "Sheet write failed",
      details: error.message,
    });
  }
}
