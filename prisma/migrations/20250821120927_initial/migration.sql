-- CreateSchema
CREATE SCHEMA IF NOT EXISTS "qa";

-- CreateTable
CREATE TABLE "qa"."qa_products" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "name" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "price" DECIMAL(12,2) NOT NULL DEFAULT 0,
    "images" TEXT[],
    "brand" TEXT NOT NULL,
    "category" TEXT NOT NULL,
    "stock" INTEGER NOT NULL,
    "rating" DECIMAL(3,2) NOT NULL DEFAULT 0,
    "numReviews" INTEGER NOT NULL DEFAULT 0,
    "isFeatured" BOOLEAN NOT NULL DEFAULT false,
    "banner" TEXT,
    "createdAt" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "modifiedAt" TIMESTAMP(6),
    "createdBy" TEXT,
    "modifiedBy" TEXT,

    CONSTRAINT "qa_products_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "product_slug_idx" ON "qa"."qa_products"("slug");
