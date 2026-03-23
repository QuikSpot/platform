-- CreateEnum
CREATE TYPE "DocumentType" AS ENUM ('NIC_PHOTO', 'SELFIE', 'SERVICE_PROOF');

-- CreateEnum
CREATE TYPE "DocumentStatus" AS ENUM ('PENDING', 'APPROVED', 'REJECTED');

-- CreateTable
CREATE TABLE "main_category" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(100) NOT NULL,
    "icon_url" VARCHAR(255),
    "is_active" BOOLEAN NOT NULL DEFAULT true,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "main_category_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "sub_category" (
    "id" SERIAL NOT NULL,
    "main_category_id" INTEGER NOT NULL,
    "name" VARCHAR(100) NOT NULL,
    "is_active" BOOLEAN NOT NULL DEFAULT true,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "sub_category_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "service_provider" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "full_name" VARCHAR(150) NOT NULL,
    "mobile_number" VARCHAR(20) NOT NULL,
    "mobile_verified" BOOLEAN NOT NULL DEFAULT false,
    "whatsapp_number" VARCHAR(20),
    "email" VARCHAR(150),
    "nic_number" VARCHAR(30) NOT NULL,
    "is_active" BOOLEAN NOT NULL DEFAULT false,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "service_provider_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "provider_service" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "provider_id" UUID NOT NULL,
    "main_category_id" INTEGER NOT NULL,
    "sub_category_id" INTEGER NOT NULL,
    "experience_years" INTEGER,
    "description" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "provider_service_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "service_area" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "provider_id" UUID NOT NULL,
    "town" VARCHAR(100) NOT NULL,
    "area_description" VARCHAR(255),
    "latitude" DECIMAL(9,6),
    "longitude" DECIMAL(9,6),
    "address" VARCHAR(255),
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "service_area_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "availability" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "provider_id" UUID NOT NULL,
    "available_days" VARCHAR(20),
    "available_from" TIME,
    "available_to" TIME,
    "is_24_7" BOOLEAN NOT NULL DEFAULT false,
    "is_available_now" BOOLEAN NOT NULL DEFAULT false,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "availability_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "verification_document" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "provider_id" UUID NOT NULL,
    "document_type" "DocumentType" NOT NULL,
    "bucket_key" VARCHAR(500) NOT NULL,
    "status" "DocumentStatus" NOT NULL DEFAULT 'PENDING',
    "uploaded_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "verification_document_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "idx_sub_category_main" ON "sub_category"("main_category_id");

-- CreateIndex
CREATE UNIQUE INDEX "service_provider_mobile_number_key" ON "service_provider"("mobile_number");

-- CreateIndex
CREATE UNIQUE INDEX "service_provider_nic_number_key" ON "service_provider"("nic_number");

-- CreateIndex
CREATE INDEX "idx_sp_mobile" ON "service_provider"("mobile_number");

-- CreateIndex
CREATE INDEX "idx_sp_nic" ON "service_provider"("nic_number");

-- CreateIndex
CREATE INDEX "idx_ps_provider" ON "provider_service"("provider_id");

-- CreateIndex
CREATE INDEX "idx_ps_main_category" ON "provider_service"("main_category_id");

-- CreateIndex
CREATE INDEX "idx_ps_sub_category" ON "provider_service"("sub_category_id");

-- CreateIndex
CREATE UNIQUE INDEX "provider_service_provider_id_sub_category_id_key" ON "provider_service"("provider_id", "sub_category_id");

-- CreateIndex
CREATE INDEX "idx_sa_provider" ON "service_area"("provider_id");

-- CreateIndex
CREATE INDEX "idx_sa_town" ON "service_area"("town");

-- CreateIndex
CREATE UNIQUE INDEX "availability_provider_id_key" ON "availability"("provider_id");

-- CreateIndex
CREATE INDEX "idx_av_available_now" ON "availability"("is_available_now");

-- CreateIndex
CREATE INDEX "idx_av_provider" ON "availability"("provider_id");

-- CreateIndex
CREATE INDEX "idx_vd_provider" ON "verification_document"("provider_id");

-- CreateIndex
CREATE INDEX "idx_vd_provider_status" ON "verification_document"("provider_id", "status");

-- AddForeignKey
ALTER TABLE "sub_category" ADD CONSTRAINT "sub_category_main_category_id_fkey" FOREIGN KEY ("main_category_id") REFERENCES "main_category"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "provider_service" ADD CONSTRAINT "provider_service_provider_id_fkey" FOREIGN KEY ("provider_id") REFERENCES "service_provider"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "provider_service" ADD CONSTRAINT "provider_service_main_category_id_fkey" FOREIGN KEY ("main_category_id") REFERENCES "main_category"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "provider_service" ADD CONSTRAINT "provider_service_sub_category_id_fkey" FOREIGN KEY ("sub_category_id") REFERENCES "sub_category"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "service_area" ADD CONSTRAINT "service_area_provider_id_fkey" FOREIGN KEY ("provider_id") REFERENCES "service_provider"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "availability" ADD CONSTRAINT "availability_provider_id_fkey" FOREIGN KEY ("provider_id") REFERENCES "service_provider"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "verification_document" ADD CONSTRAINT "verification_document_provider_id_fkey" FOREIGN KEY ("provider_id") REFERENCES "service_provider"("id") ON DELETE CASCADE ON UPDATE CASCADE;
