CREATE TABLE user_pins (
  id SERIAL PRIMARY KEY,
  userId UUID UNIQUE NOT NULL references auth.users on delete cascade,
  pin VARCHAR(255) NOT NULL,
  createdAt TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updatedAt TIMESTAMP NULL,
  FOREIGN KEY (userId) REFERENCES auth.users
);
