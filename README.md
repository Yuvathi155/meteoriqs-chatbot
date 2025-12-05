# MeteoriQs AI Chatbot

A custom interactive chatbot designed for MeteoriQs Technologies, built with a clean UI, branding, and a smart knowledge-based response system. It supports quick reply buttons, typing animation, a backend response engine, and full company branding.

## Features

- Custom UI matching MeteoriQs branding
- Assistant avatar + company logo
- Quick reply buttons (Services, Pricing, Careers, Contact, etc.)
- Typing animation similar to ChatGPT
- Knowledge-based responses using knowledge.json
- Fully integrated frontend + backend with Node.js

## Project Structure

MeteoriQs-Final-Chatbot
│
├── server.js          → Backend server (Node + Express)
├── package.json       → Dependencies and scripts
├── knowledge.json     → Company FAQ responses
│
└── public/            → Frontend UI files
    ├── index.html     → Chat interface layout
    ├── style.css      → Styling and theme
    ├── script.js      → Chat messaging logic
    ├── logo.png       → MeteoriQs logo
    └── avatar.png     → Assistant avatar

## Tech Stack

Frontend: HTML, CSS, JavaScript  
Backend: Node.js + Express  
Storage: JSON Knowledge base  

## How to Run the Project

1 Install Node.js  
Download from: https://nodejs.org  
Restart system after installation.

2 Open the project folder in terminal:

cd "C:\Users\user\Desktop\MeteoriQs-Final-Chatbot"

3 Install dependencies:

npm install

4 Start the server:

npm start

You should see this:

MeteoriQs Chatbot running on http://localhost:5000

5 Open your browser and go to:

http://localhost:5000

You will now see and use the chatbot.

## Editing Responses

All chatbot replies are stored inside:

knowledge.json

You can edit or add new answers. Example:

"pricing": "Our pricing depends on project scope and requirements."

After editing, restart:

npm start

## Future Improvements (Optional)

- Voice input and text-to-speech
- Online deployment (Render or Railway)
- OpenAI / GPT integration
- Lead capture (user email, name, service interest)
- Admin dashboard analytics

## Developer

Created by: Yuvathi  
Role: Software Intern — MeteoriQs Technologies  
Status: Completed and ready for review.

## Status

The chatbot is working fully with:

✓ Frontend + Backend  
✓ Branding elements  
✓ Knowledge response system  
✓ Quick reply UI

Ready for internal demo and further enhancements.

