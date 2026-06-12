/*
  Warnings:

  - Added the required column `finishedAt` to the `Ticket` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `ticket` ADD COLUMN `finishedAt` DATETIME(3) NOT NULL;
