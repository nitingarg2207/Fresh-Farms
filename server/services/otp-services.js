const crypto = require('crypto')
const smsSID = process.env.SMS_SID
const smsAuthToken = process.env.SMS_AUTH_TOKEN

const twilio = require('twilio')(smsSID,smsAuthToken,{
    lazyLoading:true
})

class OtpService{
    async generateOtp(){
        const otp=crypto.randomInt(1000,9999)
        return otp
    }
    
    async sendBySms(phone,otp){
        return await twilio.messages.create({
            to: phone,
            from: process.env.SMS_FROM_NUMBER,
            body: `Your FreshFarms OTP is ${otp}`
        })
    }
    verifyOtp(){
        
    }
}

module.exports = new OtpService()