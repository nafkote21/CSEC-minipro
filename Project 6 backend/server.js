const express = require("express");

const app = express();
const PORT = 3000;
app.use(express.json());
const mainRoutes = require("./routes/mainRoutes");

app.use("/api", mainRoutes);
app.use((req, res) => {
  res.status(404).json({ message: "Route not found" });
});
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
