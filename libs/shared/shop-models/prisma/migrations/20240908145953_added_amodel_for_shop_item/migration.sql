-- CreateEnum
CREATE TYPE "GuitarType" AS ENUM ('Electric', 'Acoustic', 'Ukulele');

-- CreateTable
CREATE TABLE "ShopItem" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "user_id" TEXT NOT NULL,
    "photo" TEXT,
    "type" "GuitarType" NOT NULL,
    "code" TEXT NOT NULL,
    "strings_number" INTEGER NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "ShopItem_pkey" PRIMARY KEY ("id")
);
