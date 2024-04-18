CREATE EXTENSION IF NOT EXISTS "uuid-ossp"; -- Ensure uuid-ossp extension is available

CREATE TABLE "budgets" (
  "id" SERIAL PRIMARY KEY,
  "name" VARCHAR NOT NULL,
  "category" VARCHAR NOT NULL,
  "alert" INT,
  "startDate" TIMESTAMP NOT NULL,
  "endDate" TIMESTAMP,
  "userAccountId" INT NOT NULL,
  "budgeted" DECIMAL NOT NULL,
  "spent" DECIMAL,
  "budgetKey" UUID DEFAULT uuid_generate_v4() UNIQUE NOT NULL,
  "createdAt" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updatedAt" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- Create a trigger function to update "updatedAt" column
CREATE OR REPLACE FUNCTION update_budget_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW."updatedAt" = CURRENT_TIMESTAMP;
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create a trigger to automatically update "updatedAt" column on UPDATE
CREATE TRIGGER update_budget_updated_at_trigger
BEFORE UPDATE ON "budgets"
FOR EACH ROW
EXECUTE FUNCTION update_budget_updated_at();
