import User from "../models/userSchema";
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import nodemailer from "nodemailer";
import {OTPgenerator} from "../lib/OTPgenerator"