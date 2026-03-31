-- CreateEnum
CREATE TYPE "ExperienceLevel" AS ENUM ('BEGINNER', 'INTERMEDIATE', 'EXPERT');

-- AlterEnum
ALTER TYPE "DocumentType" ADD VALUE 'NIC_BACK';

-- AlterTable
ALTER TABLE "availability" ADD COLUMN     "night_service" BOOLEAN NOT NULL DEFAULT false;

-- AlterTable
ALTER TABLE "provider_service" ADD COLUMN     "experience_level" "ExperienceLevel";

-- AlterTable
ALTER TABLE "service_provider" ADD COLUMN     "district" VARCHAR(100),
ADD COLUMN     "province" VARCHAR(100);

-- CreateTable
CREATE TABLE "service_zone" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "provider_id" UUID NOT NULL,
    "zone_name" VARCHAR(150) NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "service_zone_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "provider_agreement" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "provider_id" UUID NOT NULL,
    "terms_accepted" BOOLEAN NOT NULL DEFAULT false,
    "terms_accepted_at" TIMESTAMP(3),
    "commission_accepted" BOOLEAN NOT NULL DEFAULT false,
    "commission_accepted_at" TIMESTAMP(3),
    "ip_address" VARCHAR(45),
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "provider_agreement_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "idx_sz_provider" ON "service_zone"("provider_id");

-- CreateIndex
CREATE INDEX "idx_sz_zone_name" ON "service_zone"("zone_name");

-- CreateIndex
CREATE UNIQUE INDEX "provider_agreement_provider_id_key" ON "provider_agreement"("provider_id");

-- CreateIndex
CREATE INDEX "idx_pa_provider" ON "provider_agreement"("provider_id");

-- AddForeignKey
ALTER TABLE "service_zone" ADD CONSTRAINT "service_zone_provider_id_fkey" FOREIGN KEY ("provider_id") REFERENCES "service_provider"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "provider_agreement" ADD CONSTRAINT "provider_agreement_provider_id_fkey" FOREIGN KEY ("provider_id") REFERENCES "service_provider"("id") ON DELETE CASCADE ON UPDATE CASCADE;
