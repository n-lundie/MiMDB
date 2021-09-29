-- CreateTable
CREATE TABLE "user" (
    "uid" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "pk_130" PRIMARY KEY ("uid")
);
