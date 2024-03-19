/*
  Warnings:

  - Added the required column `role` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "admin" AS ENUM ('outsider', 'admin');

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "role" "admin" NOT NULL;
