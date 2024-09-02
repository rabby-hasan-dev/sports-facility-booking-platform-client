
Sports Facility Booking Platform - Frontend
===========================================

Overview
--------

This project is the frontend application for a sports facility booking platform. It provides a user interface for managing facility bookings, user accounts, and administrative tasks. The frontend interacts with a backend system via API calls and is designed to be responsive and user-friendly.

Features
--------

*   **Landing Page**: Includes a hero section, featured facilities, a "How It Works" guide, customer testimonials, a unique creative section, and a footer.
    
*   **User Dashboard**: Allows users to view and manage their bookings with a personalized greeting.
    
*   **Admin Dashboard**: Enables administrators to manage facilities, bookings, and user accounts, including CRUD operations on facilities and user management.
    
*   **Login/Registration Page**: Handles user authentication and registration.
    
*   **About Us Page**: Provides information about the organization, including the mission statement, team bios, history, and contact information.
    
*   **Contact Us Page**: Includes a contact form, map integration, and contact details.
    
*   **Facility Listing Page**: Displays available sports facilities with search and filter options.
    
*   **Facility Details Page**: Shows detailed information about a specific facility.
    
*   **Booking Page**: Guides users through booking a facility, checking availability, and making a payment.
    
*   **Error Pages**: Custom 404 and unauthorized access pages.
    
*   **Bonus Features**: Scroll to Top button, pagination for facility listing, and consistent error handling using Toast notifications.
    

Technologies Used
-----------------

*   **React**: For building the user interface.
    
*   **Tailwind CSS**: For styling and responsive design.
    
*   **Ant Design**: For UI components and form handling.
    
*   **Redux**: For managing form state and validation.
*   **React Hook Form**: For managing form state and validation.

*  **More Technology**  emailjs,moment, jwt decode,react lefltet,sonner, redux persist
    

Installation
------------

### Prerequisites

*   Node.js
    
*   Git
    

### Setup Instructions

1. npm install
    
2.  npm run dev
    
3. #### .env ==> add below url from  env file
  VITE_IMAGE_UPLOAD_TOKEN=
  VITE_EMAILJS_SERVICE_ID=
  VITE_EMAILJS_TEMPLATE_ID=
  VITE_EMAILJS_PUBLIC_KEY=
  VITE_SERVER_API_LINK=
        
4.  **Access the application**:Open your browser and navigate to http://localhost:3000.
    

Usage
-----

### Landing Page

*   Acts as the gateway to the platform, featuring a hero section, facility highlights, and a "How It Works" guide.
    

### User Dashboard

*   Displays a personalized greeting and allows users to manage their bookings.
    

### Admin Dashboard

*   Provides tools for administrators to manage facilities, bookings, and user accounts.
    

### Login/Registration Page

*   Allows users to log in or register, with options for social login.
    

### About Us Page

*   Shows information about the organization, including team members and history.
    

### Contact Us Page

*   Features a contact form, optional map integration, and contact details.
    

### Facility Listing Page

*   Lists all available facilities with search and filter capabilities.
    

### Facility Details Page

*   Provides detailed information about a specific facility.
    

### Booking Page

*   Facilitates the booking process, including checking availability and making payments.
    

### Error Pages

*   Custom 404 and unauthorized access pages to handle errors gracefully.
    

Bonus Features
--------------

1.  **Scroll to Top Button**: A button that appears when scrolling down the page to quickly return to the top.
    
2.  **Pagination**: Added to the Facility Listing page for improved navigation.
    
3.  **Error Handling**: Uses Toast notifications for API errors and validation messages.
    




