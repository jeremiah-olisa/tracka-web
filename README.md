# Traka - Financial Tracking Application (Web Version)

![Flutter Logo](./src/assets/images/word-mark-logo-light.svg)


## Product Requirements Document (PRD)

### Introduction:

"Traka" is a versatile financial tracking application designed to allow users to monitor their financial transactions seamlessly, offering data storage using Supabase for the web version.

### Objective:

Provide users with an intuitive platform to track and manage their financial transactions while offering flexibility in data storage and retrieval using Vue.js and Supabase.

### Features:

- **Multiple Accounts**: Users can create various accounts such as Personal, Business, etc.

- **Transactions**: Users can manage (add, view, edit, delete) their income and expense entries.

- **Export Data**: Users can export their transaction data for backup or further analysis.

- **Data Storage Interface**: Utilizes Supabase for backend data storage.

- **Transaction Categories**: Categories like Food, Transport, Maintenance, Electricity, and more for better transaction organization.

### Non-Functional Requirements:

- **Performance**: Fast loading and seamless transitions.

- **Security**: Encrypted data transfers, with potential for user authentication.

- **Compatibility**: Cross-browser compatibility for major web browsers.

- **Scalability**: Design for growth in terms of user base and features.

### Dependencies:

- **Vue.js**: For building the frontend of the web application.

- **Supabase SDK**: For interacting with the Supabase backend.

## Screens and Visual Descriptions:
1. Splash Screen:
Central app logo or name with a thematic background. This screen transitions to the Authentication screen or Homepage based on authentication state.

2. Authentication Screen:
Features the app logo or name at the top. Input fields for username/email and password in the center. Options to login, register, or continue as a guest are placed appropriately.

3. Registration Screen:
Title at the top with labeled input fields for registration details in the center. A sign-up button and a link to the login page are at the bottom.

4. Data Source Selection Screen:
A title at the top, three selection buttons in the center for the different data sources, and a continue button at the bottom.

5. Homepage:
Top title with a settings icon on the right. A summary of financial details and a list or grid view of recent transactions occupy the center. A navigation bar is at the bottom.

6. Add Transaction Screen:
A title at the top, a toggle between "Income" and "Expense" followed by input fields in the center, and a save button at the bottom.

7. View Transactions Screen:
A top title with a filter icon on the right. The center has a list of all transactions with swipe options. The same navigation bar from the Homepage is at the bottom.

8. Transaction Details Screen:
A title at the top with a detailed transaction view in the center. If editable, an update button is at the bottom.

9. Settings Screen:
Top title, center list view of various settings options, and a logout button at the bottom.

10. Export Data Screen:
Top title, information text in the center, and an export button at the bottom.