exports.home = (req, res) => {
  res.json({ message: "Welcome to the Express MVC Server" });
};

exports.about = (req, res) => {
  res.json({ message: "This is the About page" });
};

exports.contact = (req, res) => {
  res.json({ message: "Contact us at contact@example.com" });
};
exports.time = (req, res) => {
  const currentTime = new Date().toLocaleTimeString();
  res.json({ time: currentTime });
};

exports.echo = (req, res) => {
  const data = req.body;
  if (!data || Object.keys(data).length === 0) {
    return res.status(400).json({ error: "No JSON data provided" });
  }

  res.json({
    receivedData: data,
  });
};
