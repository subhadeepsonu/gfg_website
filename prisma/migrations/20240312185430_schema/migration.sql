/*
  Warnings:

  - You are about to drop the column `department` on the `Member` table. All the data in the column will be lost.
  - You are about to drop the column `facebookId` on the `Member` table. All the data in the column will be lost.
  - You are about to drop the column `githubId` on the `Member` table. All the data in the column will be lost.
  - You are about to drop the column `instaId` on the `Member` table. All the data in the column will be lost.
  - You are about to drop the column `linkdinId` on the `Member` table. All the data in the column will be lost.
  - Added the required column `departmentid` to the `Member` table without a default value. This is not possible if the table is not empty.
  - Changed the type of `role` on the `Member` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- CreateEnum
CREATE TYPE "roles" AS ENUM ('lead', 'colead', 'ass_colead', 'member');

-- AlterTable
ALTER TABLE "Member" DROP COLUMN "department",
DROP COLUMN "facebookId",
DROP COLUMN "githubId",
DROP COLUMN "instaId",
DROP COLUMN "linkdinId",
ADD COLUMN     "departmentid" INTEGER NOT NULL,
DROP COLUMN "role",
ADD COLUMN     "role" "roles" NOT NULL;

-- AddForeignKey
ALTER TABLE "Member" ADD CONSTRAINT "Member_departmentid_fkey" FOREIGN KEY ("departmentid") REFERENCES "Department"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
