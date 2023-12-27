CREATE TABLE IF NOT EXISTS accounts (
    id SERIAL PRIMARY KEY,
    account_id VARCHAR(255) UNIQUE,
    name VARCHAR(255) NOT NULL,
    category VARCHAR(255) CHECK (category IN ('Saving', 'Bussiness', 'Personal', 'Education', 'Gift')) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS account_transactions (
    id SERIAL PRIMARY KEY,
    transaction_id VARCHAR(255) UNIQUE,
    transaction_type VARCHAR(255) CHECK (transaction_type IN ('Credit', 'Debit')) NOT NULL,
    narration VARCHAR(255) NOT NULL,
    amount NUMERIC NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Add the user_id column to accounts table
ALTER TABLE accounts
ADD COLUMN user_id UUID REFERENCES auth.users(user_id);

-- Add the foreign key constraint
ALTER TABLE accounts
ADD CONSTRAINT fk_user
FOREIGN KEY (user_id)
REFERENCES auth.users(user_id);
