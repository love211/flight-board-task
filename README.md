# Flight Board Task

## Description
This project is a flight board application that displays real-time flight information. It provides details such as flight number, destination, departure time, and status. The application is designed to be a helpful tool for travelers and airport personnel to keep track of flights.

## Features
- Real-time flight information updates
- Display of flight number, destination, departure time, and status
- User-friendly interface

## Installation
To run this project locally, follow these steps:

1. Clone the repository:
    ```bash
    git clone https://github.com/love211/flight-board-task.git
    ```

2. Navigate to the project directory:
    ```bash
    cd flight-board-task
    ```

3. Install the dependencies:
    ```bash
    npm install
    ```

4. Start the application:
    ```bash
    npm start
    ```

# Real-Time Flight Status Board

This is a React-based application that mimics a real-time flight status board. It retrieves flight details from a provided API, updates the data at regular intervals, and allows users to view more detailed information about a specific flight.

## Features

1. **Flight Table:**
   - Fetch and display a list of flights in a table with columns for Flight Number, Airline, Origin, Destination, Departure Time, and Status.
   - Every 30 seconds, fetch fresh data from the API to update the displayed flight statuses.

2. **Detail View:**
   - Clicking on a row (or a link within a row) navigates the user to a detailed view of that flight.
   - In the detailed view, fetch and display comprehensive data for the selected flight.

3. **Navigation:**
   - Use React Router to handle navigation between the main flight    

## Usage
Once the application is running, you can access it in your web browser at `http://localhost:3000`. The flight board will display the current flight information and update in real-time.

## Contact
If you have any questions or suggestions, feel free to open an issue or contact the repository owner.

