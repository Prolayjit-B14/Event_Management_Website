require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

// Connect to MongoDB
mongoose.connect("mongodb://127.0.0.1:27017/eventDB", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

// User Schema
const UserSchema = new mongoose.Schema({
    username: String,
    email: { type: String, unique: true },
    password: String,
    profilePic: { type: String, default: "/default.jpg" },
});

const User = mongoose.model("User", UserSchema);

// Register API
app.post("/register", async (req, res) => {
    try {
        const { username, email, password } = req.body;
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = new User({ username, email, password: hashedPassword });
        await user.save();
        res.json({ message: "User registered successfully" });
    } catch (err) {
        res.status(400).json({ error: "User already exists" });
    }
});

// Login API
app.post("/login", async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (!user) return res.status(400).json({ message: "User not found" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ message: "Invalid credentials" });

    const token = jwt.sign({ id: user._id }, "secretkey", { expiresIn: "1h" });
    res.json({ token, user: { email: user.email, username: user.username, profilePic: user.profilePic } });
});

// Get User Data API
app.get("/user", async (req, res) => {
    const email = req.query.email;
    const user = await User.findOne({ email });

    if (!user) return res.status(404).json({ message: "User not found" });

    res.json({ email: user.email, username: user.username, profilePic: user.profilePic });
});

app.listen(5000, () => console.log("Server running on port 5000"));

const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");
const bodyParser = require("body-parser");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Email Configuration (Use your email credentials)
const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.ADMIN_EMAIL, // Set in .env file
        pass: process.env.ADMIN_PASSWORD, // Set in .env file
    },
});

app.post("/send-email", (req, res) => {
    const { email } = req.body;

    const mailOptions = {
        from: process.env.ADMIN_EMAIL,
        to: process.env.ADMIN_EMAIL, // Admin receives the email
        subject: "New Login Detected",
        text: `User with email ${email} has logged in.`,
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
            res.status(500).json({ message: "Failed to send email" });
        } else {
            console.log("Email sent: " + info.response);
            res.status(200).json({ message: "Email sent successfully" });
        }
    });
});

// Start Server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

