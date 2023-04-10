const express = require("express");
const app = express();
const cors = require("cors");
// to read json data in requests
app.use(express.json());
app.use(cors());
const port = 5000;

// function to validate the form data
const validate = (data) => {
  const validateObj = {};
  if (data.name.length < 3)
    validateObj.name = "Name must be atlest 3 characters";
  if (!data.email.includes("@") || !data.email.includes("."))
    validateObj.email = "Email is invalid";
  if (data.password.length < 8)
    validateObj.password = "Password must be atleast 8 characters";
  if (data.password != data.confirmPassword)
    validateObj.confirmPassword = "Passwords must match";
  return validateObj;
};

// API to post data from the client to the server
app.post("/signUp", (req, res, next) => {
  const response = validate(req.body);
  console.log(response);
  res.status(200).json({
    status: "success",
    response,
  });
});

app.listen(port, "127.0.0.1", () => {
  console.log(`Server running on port ${port}`);
});
