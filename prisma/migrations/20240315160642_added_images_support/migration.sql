-- AlterEnum
ALTER TYPE "roles" ADD VALUE 'president';

-- AlterTable
ALTER TABLE "Events" ADD COLUMN     "imgurl" TEXT;

-- AlterTable
ALTER TABLE "User" ALTER COLUMN "imgurl" DROP NOT NULL;
