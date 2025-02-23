📦 Prerequisites
Make sure you have the following installed on your system:

Node.js (v18+ recommended)
npm or yarn
SQLite (included with Prisma ORM)
📝 Step-by-Step Installation
1️⃣ Download and Extract the Project

Download the project ZIP file from the provided source.
Extract the ZIP file into your desired directory.
2️⃣ Open a Terminal/Command Prompt
Navigate to the project folder:

bash
Copy
Edit
cd your-project-folder-name
3️⃣ Install Dependencies
Run the following command to install the required packages:

bash
Copy
Edit
npm install
4️⃣ Set Environment Variables
Create a .env file in the root directory and add the following:

env
Copy
Edit
DATABASE_URL="file:./dev.db"
PORT=3000
5️⃣ Set up the Database
Initialize the SQLite database and apply migrations:

bash
Copy
Edit
npx prisma migrate dev --name init
6️⃣ Run the Server
Start the development server:

bash
Copy
Edit
npm run dev
Or start the production server:

bash
Copy
Edit
npm start
🌐 Access the API
Once the server is running, you can access the API at:

arduino
Copy
Edit
http://localhost:3000
🐛 Troubleshooting
1. If the server doesn’t start:

Check the .env file and confirm DATABASE_URL is set correctly.
Ensure all dependencies are installed with npm install.
2. If the database is not initialized:

Run the database migration command again:
bash
Copy
Edit
npx prisma migrate dev --name init
✅ You're Ready!
The server should now be running and ready to use. Happy coding! 🚀
