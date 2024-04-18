-- For user_accounts table
CREATE TABLE "user_accounts" (
    "id" SERIAL PRIMARY KEY,
    "userId" UUID NOT NULL REFERENCES auth.users ON DELETE CASCADE,
    "bankName" VARCHAR(255) NOT NULL,
    "accountName" VARCHAR(255) NOT NULL,
    "accountNumber" VARCHAR(255) NOT NULL,
    "accountKey" UUID DEFAULT uuid_generate_v4() UNIQUE NOT NULL,
    "currency" VARCHAR(255) NOT NULL,
    "meta" VARCHAR(255) NOT NULL,
    "balance" DECIMAL NOT NULL,
    "createdAt" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- For budget_items table
CREATE TABLE "budget_items" (
    "id" SERIAL PRIMARY KEY,
    "name" VARCHAR(255) NOT NULL,
    "category" VARCHAR(255) NOT NULL,
    "budgetId" INT NOT NULL REFERENCES budgets ON DELETE CASCADE,
    "total" DECIMAL NOT NULL,
    "spent" DECIMAL,
    "budgetItemKey" UUID DEFAULT uuid_generate_v4() UNIQUE NOT NULL,
    "budget" VARCHAR(255) NOT NULL, -- Assuming Budget is a string, change to appropriate type if necessary
    "createdAt" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- Trigger to update updatedAt column
CREATE OR REPLACE FUNCTION update_budget_items_updated_at()
RETURNS TRIGGER AS $$
BEGIN
    NEW."updatedAt" = NOW();
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER budget_items_update_trigger
BEFORE UPDATE ON budget_items
FOR EACH ROW
EXECUTE FUNCTION update_budget_items_updated_at();
