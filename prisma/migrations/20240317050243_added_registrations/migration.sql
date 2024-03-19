/*
  Warnings:

  - You are about to drop the `_EventsToUser` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "_EventsToUser" DROP CONSTRAINT "_EventsToUser_A_fkey";

-- DropForeignKey
ALTER TABLE "_EventsToUser" DROP CONSTRAINT "_EventsToUser_B_fkey";

-- DropTable
DROP TABLE "_EventsToUser";

-- CreateTable
CREATE TABLE "registerevent" (
    "id" SERIAL NOT NULL,
    "eventid" INTEGER NOT NULL,
    "userid" INTEGER NOT NULL,

    CONSTRAINT "registerevent_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "registerevent" ADD CONSTRAINT "registerevent_eventid_fkey" FOREIGN KEY ("eventid") REFERENCES "Events"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "registerevent" ADD CONSTRAINT "registerevent_userid_fkey" FOREIGN KEY ("userid") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
