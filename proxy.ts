import express from "express";
import axios from "axios";
import cors from "cors";

const app = express();
const PORT = process.env.PORT ?? 3000;

app.use(cors());

app.get("/fetch-data", async (req, res) => {
  try {
    const response = await axios.get(
      "https://www.cnb.cz/en/financial-markets/foreign-exchange-market/central-bank-exchange-rate-fixing/central-bank-exchange-rate-fixing/daily.txt"
    );
    res.send(response.data);
  } catch (error: any) {
    console.error("Error fetching data: ", error);
    res.status(500).send("Error fetching data: " + error.toString());
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
