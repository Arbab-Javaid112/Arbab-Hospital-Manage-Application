import mongoose from "mongoose";
import validator from 'validator'

const appointment_Schema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        minLength: [3, "First name should contain at least 3 characters"]
    },
    lastName: {
        type: String,
        required: true,
        minLength: [3, "Last name should contain at least 3 characters"]
    },
    email: {
        type: String,
        required: true,
        validate: [validator.isEmail, "Please provide a valid Email"]
    },
    phonenumber: {
        type: String,
        required: true,
        minLength: [11, "Phone number must contain exactly 11 digits"],
        maxLength: [11, "Phone number must contain exactly 11 digits"]
    },
    nic: {
        type: String,
        required: true,
        minLength: [13, "CNIC must be 13 digits"],
        maxLength: [13, "CNIC must be 13 digits"]
    },
    dob: {
        type: Date,
        required: true
    },
    gender: {
        type: String,
        required: true,
        enum: ["Male", "Female"]
    },

    appointment_date: {
        type: String,
        required: true
    },
    department: {
        type: String,
        required: true
    },
    doctor: {
        firstName: {
            type: String,
            required: true
        },
        lastName: {
            type: String,
            required: true
        }
    },
    has_visited: {
        type: Boolean,
        defalut: false
    },
    doctor_id: {
        type: mongoose.Schema.ObjectId,
        required: true
    },
    patient_id: {
        type: mongoose.Schema.ObjectId,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    status: {
        type: String,
        enum: ["Pending", "Accepted", "Rejected"],
        default: "Pending"
    }

});

export const Appointment = mongoose.model("appointment", appointment_Schema);