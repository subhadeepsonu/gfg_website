-- CreateTable
CREATE TABLE "member" (
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

    CONSTRAINT "member_pkey" PRIMARY KEY ("id")
);
