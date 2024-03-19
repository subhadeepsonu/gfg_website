/*
  Warnings:

  - The values [ass_colead] on the enum `roles` will be removed. If these variants are still used in the database, this will fail.
  - You are about to drop the column `departmentid` on the `Member` table. All the data in the column will be lost.
  - Added the required column `departmentname` to the `Member` table without a default value. This is not possible if the table is not empty.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "roles_new" AS ENUM ('lead', 'colead', 'associate_colead', 'member');
ALTER TABLE "Member" ALTER COLUMN "role" TYPE "roles_new" USING ("role"::text::"roles_new");
ALTER TYPE "roles" RENAME TO "roles_old";
ALTER TYPE "roles_new" RENAME TO "roles";
DROP TYPE "roles_old";
COMMIT;

-- DropForeignKey
ALTER TABLE "Member" DROP CONSTRAINT "Member_departmentid_fkey";

-- AlterTable
ALTER TABLE "Member" DROP COLUMN "departmentid",
ADD COLUMN     "departmentname" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "Member" ADD CONSTRAINT "Member_departmentname_fkey" FOREIGN KEY ("departmentname") REFERENCES "Department"("name") ON DELETE RESTRICT ON UPDATE CASCADE;
