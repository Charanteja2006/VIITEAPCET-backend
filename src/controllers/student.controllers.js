import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

export const registerStudent = async (req, res) => {
  try {
    const {
      fullName,
      fatherName,
      motherName,
      dateOfBirth,
      gender,
      email,
      mobileNumber,
      alternativeMobileNumber,
      stream,
      qualifyingExam,
      yearOfPassing,
      category,
      minorityStatus,
      address,
      city,
      state,
      pincode,
      photo,
    } = req.body;

    // Check if email or mobile already exists
    const existingStudent = await prisma.Student.findFirst({
      where: { OR: [{ email }, { mobileNumber }] },
    });

    if (existingStudent) {
      return res.status(400).json({
        error: "A student with this email or mobile number already exists",
      });
    }

    // Generate studentId
    const count = await prisma.Student.count();
    const year = new Date().getFullYear();
    const studentId = `STU${year}${String(count + 1).padStart(4, "0")}`;

    // Generate password
    const plainPassword = Math.random().toString(36).slice(-8);
    const hashedPassword = await bcrypt.hash(plainPassword, 10);

    // Save to DB
    const student = await prisma.Student.create({
      data: {
        studentId,
        password: hashedPassword,
        fullName,
        fatherName,
        motherName,
        dateOfBirth: new Date(dateOfBirth),
        gender,
        email,
        mobileNumber,
        alternativeMobileNumber,
        stream,
        qualifyingExam,
        yearOfPassing,
        category,
        minorityStatus,
        address,
        city,
        state,
        pincode,
        photo,
      },
    });

    

    res.status(201).json({
      message: "Student registered successfully. Email sent.",
      studentId,
      tempPassword: plainPassword,
    });
  } catch (error) {
    console.error("Error registering student:", error);
    res.status(500).json({ error: "Failed to register student" });
  }
};
