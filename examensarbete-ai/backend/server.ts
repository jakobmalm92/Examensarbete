import express from "express";

const app = express();
const PORT = 5000;

app.use(express.json());

app.post("/api/offer", (req, res) => {
  const { name, email, phone, description } = req.body;

  if (!name || !email || !phone || !description) {
    return res.status(400).json({ message: "Alla fält är obligatoriska." });
  }

  console.log("Formulärdata mottagen:", { name, email, phone, description });
  res.status(200).json({ message: "Offertförfrågan mottagen!" });
});

app.listen(PORT, () => {
  console.log(`Servern körs på http://localhost:${PORT}`);
});