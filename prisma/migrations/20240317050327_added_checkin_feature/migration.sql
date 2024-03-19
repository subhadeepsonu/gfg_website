/*
  Warnings:

  - Added the required column `checkedin` to the `registerevent` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "registerevent" ADD COLUMN     "checkedin" BOOLEAN NOT NULL;
