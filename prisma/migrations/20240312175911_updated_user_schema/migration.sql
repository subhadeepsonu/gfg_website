/*
  Warnings:

  - A unique constraint covering the columns `[RG_no]` on the table `Member` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[email]` on the table `Member` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Member_RG_no_key" ON "Member"("RG_no");

-- CreateIndex
CREATE UNIQUE INDEX "Member_email_key" ON "Member"("email");
