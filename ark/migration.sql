CREATE TYPE account_type AS ENUM ('Bank', 'Wallet', 'CreditCard');

CREATE TABLE "Account" (
  id          UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name        TEXT NOT NULL,
  type        account_type NOT NULL,
  balance     FLOAT NOT NULL,
  userId      UUID NOT NULL REFERENCES "auth"."users"(id),
  createdAt   TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  updatedAt   TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE "Category" (
  id          UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name        TEXT UNIQUE NOT NULL,
  image       TEXT,
  createdAt   TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  updatedAt   TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE "Transaction" (
  id          UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  transactionDate TIMESTAMP WITH TIME ZONE NOT NULL,
  amount      FLOAT NOT NULL,
  description TEXT NOT NULL,
  categoryId  UUID NOT NULL REFERENCES "Category"(id),
  accountId   UUID NOT NULL REFERENCES "Account"(id),
  createdAt   TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  updatedAt   TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE "Budget" (
  id          UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name        TEXT NOT NULL,
  amount      FLOAT NOT NULL,
  startDate   TIMESTAMP WITH TIME ZONE NOT NULL,
  endDate     TIMESTAMP WITH TIME ZONE NOT NULL,
  userId      UUID NOT NULL REFERENCES "auth"."users"(id),
  createdAt   TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  updatedAt   TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE "BudgetCategories" (
  id          UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  budgetId    UUID NOT NULL REFERENCES "Budget"(id),
  categoryId  UUID NOT NULL REFERENCES "Category"(id),
  amount      FLOAT NOT NULL,
  createdAt   TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  updatedAt   TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);
