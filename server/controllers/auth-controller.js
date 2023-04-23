const otpSrevice = require("../services/otp-services");
const hashService = require("../services/hash-service");
const userservice = require("../services/user-service");

class AuthController {
  async sendOtp(req, res) {
    const { phone } = req.body;
    if (!phone) {
      res.status(400).json({ message: "Phone field is required" });
    }
    const otp = await otpSrevice.generateOtp();
    const ttl = 1000 * 60 * 2;
    const expires = Date.now() + ttl;
    const data = `${phone}.${otp}.${expires}`;
    const hash = hashService.hashOtp(toString(data));
    try {
      await otpSrevice.sendBySms(phone, otp);
      return res.json({
        hash: `${hash}.${expires}`,
        phone,
      });
    } catch (err) {
      console.log(err);
      return res.status(500).json({ message: "message sending failed" });
    }
  }
  async verifyOtp(req, res) {
    const [otp, phone, hash] = req.body;
    if (!otp || !hash || !phone) {
      res.status(400).json({ message: "All fields are required" });
    }
    const [hashedOtp, expires] = hash.split(".");
    if (Date.now() > +expires) {
      res.status(400).json({ message: "Otp expired" });
    }
    const data = `${phone}.${otp}.${expires}`;
    const isValid = otpSrevice.verifyOtp(hashedOtp, data);
    if (!isValid) {
      res.status(400).json({ message: "Invalid Otp" });
    }
    let user;
    let accessToken;
    let refreshToken;
    try {
      user = await userservice.findUser({ phone });
      if (!user) {
        user = await userservice.createUser({ phone });
      }
    } catch (err) {
      console.log(err);
      res.status(500).json({message:"Db error"})
    }
    // token


  }
  verifyOtp(hashedOtp, data) {
    let computedHash = hashService.hashOtp(data);
    return computedHash === hashedOtp;
  }
}

module.exports = new AuthController();
