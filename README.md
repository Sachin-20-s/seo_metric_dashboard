# TITLE
SEO-MINI-DASHBOARD
A Mini Local Business Dashboard that simulates how small businesses might view their
SEO content and Google Business data

## FOLDER STRUCTURE
├── server/ # Express backend (API endpoints) 
├── src/ # React frontend source 
│ ├── components/ # UI components 
│ ├── store/ # Zustand global state 
│ ├── App.js 
│ └── index.js 
│ └── index.css #Tailwind css
├── public/ # Static assets (favicon, index.html) 
├── tailwind.config.js 
├── package.json # CRA frontend config 
└── README.md 

## Setup Instructions
1. Clone the Repo
   git clone https://github.com/your-username/seo-dashboard.git
   cd seo-dashboard
2. Backend Setup
   cd server
   npm install
   node index.js
   Runs on: http://localhost:5000
3. cd ..
   npm install
   npm start
   Runs on: http://localhost:3000

## Features
. Input form for business name and location
. Simulated Google rating and review count
. AI-generated SEO headline
. Regenerate headline on click
. Zustand for shared state management
. Tailwind CSS for responsive design

## API Endpoints
-> POST /business-data
  Request Body (json): { "name": "Cake & Co", "location": "Mumbai" }
  Response (json):{ "rating": "4.4", "reviews": 138, "headline": "Why Cake & Co is Mumbai's Top Spot in 2025" }
-> GET /regenerate-headline
  Query: /regenerate-headline?name=Cake%20&%20Co&location=Mumbai
  Response (json):{ "headline": "Top 5 Reasons Mumbai Loves Cake & Co" }

## Techstack
| Frontend         | Backend           | State Management |
| ---------------- | ----------------- | ---------------- |
| React + Tailwind | Node.js + Express | Zustand          |

## Screenshots
<img src="ttps://github.com/user-attachments/assets/bd84db30-82cc-47a0-9e05-58614e5b9016" width="350"/>
Input form for business name and location:![image](https://github.com/user-attachments/assets/bd84db30-82cc-47a0-9e05-58614e5b9016)
Simulated Google rating and review count:![image](https://github.com/user-attachments/assets/fe0fddf4-0cf0-4f45-8056-7d2d9423d8b9)
Stimulated AI-generated SEO headline:![image](https://github.com/user-attachments/assets/d6b11d5f-3b95-4ae5-af18-bbb2f1056023)


