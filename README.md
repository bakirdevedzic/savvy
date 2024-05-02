# Savvy - Budget Tracking App

Savvy is a modern financial planning tracking service designed to help users manage their finances more effectively.

## Features

- **Transaction Tracking**: Effortlessly track both income and expenses, giving the user a clear understanding of their overall financial health.

- **Categories**: Categorizing transactions allows the user to understand where their money is being spent. By assigning categories like "rent,""groceries," or "entertainment," users gain valuable insights into spending patterns and can identify areas for potential savings.

- **Goal Setting**: Set personalized financial goals and track progress towards achieving them. The user can create goals for anything, from saving for a vacation to building an emergency fund. Achieve financial aspirations with clear progress tracking.

- **Statistics**: Visualize spending habits with a variety of charts (pie charts, bar charts, donut charts) for different timeframes. Users can choose to see statistics for the last 7 days, 30 days, or even a full year. This flexibility allows for in-depth analysis at various time scales.

  - ** Income**: A pie chart displays the user's income breakdown by category, highlighting the sources of their financial inflows.

  - ** Expense**: Similar to income, a pie chart reveals which categories account for the most spending, allowing users to identify areas for potential cost reduction.

  - ** Spending**: A bar chart provides a visual representation of the user's lifetime spending. This chart includes monthly income and expenses, showcasing how spending and income have fluctuated over time since opening the account.

  - **Type**: This chart displays the ratio between income and expense, providing a quick snapshot of the user's financial standing.

  - **Budgets**: Track planned budgets alongside saved and spent amounts each month. This comprehensive view allows users to stay on top of their financial plan and make adjustments as needed.

- **Transaction History**: Maintain a detailed record of all your financial transactions for reference and analysis.

## Technologies Used

- **Frontend**: React, Redux, Tailwind CSS
- **Backend**: Supabase (Database, Authentication)
- **Charts**: Google Charts
- **Routing**: React Router
- **Authentication**: Magic Link Authentication with Supabase
- **State Management**: Redux Toolkit
- **Styling**: Responsive design with Tailwind CSS

## Getting Started

1.  Clone the repository:
    `git clone https://github.com/bakirdevedzic/savvy.git`
2.  Navigate to the project directory:
    `cd savvy`
3.  Install dependencies:
    `npm install`
4.  Configure your Supabase backend and authentication settings.
5.  Start the development server:
    `npm start`
6.  Open your browser and visit `http://localhost:3000` to view Savvy.
