-- CreateEnum
CREATE TYPE "Stream" AS ENUM ('ENGINEERING', 'PHARMACY', 'AGRICULTURE');

-- CreateEnum
CREATE TYPE "QualifyingExam" AS ENUM ('INTERMEDIATE_REGULAR', 'INTERMEDIATE_VOCATIONAL', 'BRIDGE_COURSE');

-- CreateEnum
CREATE TYPE "Category" AS ENUM ('OC', 'BC_A', 'BC_B', 'BC_C', 'BC_D', 'BC_E', 'SC', 'ST', 'EWS');

-- CreateTable
CREATE TABLE "Student" (
    "id" SERIAL NOT NULL,
    "studentId" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "fullName" TEXT NOT NULL,
    "fatherName" TEXT NOT NULL,
    "motherName" TEXT NOT NULL,
    "dateOfBirth" TIMESTAMP(3) NOT NULL,
    "gender" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "mobileNumber" TEXT NOT NULL,
    "alternativeMobileNumber" TEXT,
    "stream" "Stream" NOT NULL,
    "qualifyingExam" "QualifyingExam" NOT NULL,
    "yearOfPassing" INTEGER NOT NULL,
    "category" "Category" NOT NULL,
    "minorityStatus" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "state" TEXT NOT NULL,
    "pincode" TEXT NOT NULL,
    "photo" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Student_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Student_studentId_key" ON "Student"("studentId");

-- CreateIndex
CREATE UNIQUE INDEX "Student_email_key" ON "Student"("email");
