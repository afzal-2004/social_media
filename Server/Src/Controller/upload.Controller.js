const accessitems = async (req, res) => {
  res.status(200).json({
    message: "TestController",
  });
};
const Senddata = async (req, res) => {
  res.status(200).json({
    message: "Okk",
  });
  console.log("I am Sending Responce to frountend");
};
export { accessitems, Senddata };
