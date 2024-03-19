/*
  Warnings:

  - You are about to drop the `member` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "member";

-- CreateTable
CREATE TABLE "Member" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "RG_no" TEXT NOT NULL,
    "instaId" TEXT,
    "email" TEXT NOT NULL,
    "linkdinId" TEXT,
    "githubId" TEXT,
    "facebookId" TEXT,
    "department" TEXT NOT NULL,
    "role" TEXT NOT NULL,

    CONSTRAINT "Member_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Department" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Department_pkey" PRIMARY KEY ("id")
);
