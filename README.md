# 🌍 NagrikNetra AI

<div align="center">

<img src="public/logo.svg" width="120"/>

### AI-Powered Environmental Monitoring & Municipal Response Platform

Transforming citizen pollution reports into real-time environmental intelligence using **Google Gemini AI**, **Firebase**, **Next.js**, and **GIS Mapping**.

![Next.js](https://img.shields.io/badge/Next.js-16-black?style=for-the-badge&logo=nextdotjs)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=for-the-badge&logo=typescript)
![Firebase](https://img.shields.io/badge/Firebase-Firestore-orange?style=for-the-badge&logo=firebase)
![Gemini AI](https://img.shields.io/badge/Google-Gemini_AI-blue?style=for-the-badge&logo=google)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-4-38BDF8?style=for-the-badge&logo=tailwindcss)
![Vercel](https://img.shields.io/badge/Deploy-Vercel-black?style=for-the-badge&logo=vercel)

</div>

---

# 📖 Overview

NagrikNetra AI is an AI-powered environmental monitoring platform that enables citizens to report pollution incidents by uploading images.

The platform analyzes the image using **Google Gemini AI**, predicts pollution severity and environmental risk, stores reports in **Firebase Firestore**, visualizes incidents on a live map, detects pollution hotspots, and provides municipal officers with a real-time command dashboard for decision-making.

The goal is to improve collaboration between citizens and municipal authorities while enabling faster, data-driven environmental responses.

---

# ✨ Features

## 👥 Citizen Portal

- Upload pollution images
- Automatic AI analysis
- Risk Score prediction
- Severity detection
- Citizen safety recommendations
- Automatic location detection
- Tracking ID generation
- Report status tracking

---

## 🤖 AI Analysis

Powered by Google Gemini AI.

The system identifies:

- Pollution Type
- Severity Level
- Confidence Score
- Environmental Risk
- Citizen Advice
- Municipal Action
- Officer Recommendation
- AI Reasoning

---

## 🏛 Municipal Command Center

Real-time dashboard for government officers.

Features include:

- Live report monitoring
- Interactive charts
- AI recommendations
- Hotspot detection
- Risk analytics
- Status management
- Live Firestore synchronization

---

## 📍 GIS Mapping

- Live pollution locations
- Geographic clustering
- Hotspot visualization
- Real-time environmental monitoring

---

# 🏗 System Architecture

```text
Citizen
      │
      ▼
Upload Pollution Image
      │
      ▼
Google Gemini AI
      │
      ▼
AI Environmental Analysis
      │
      ▼
Firebase Firestore
      │
      ├──────────────► Tracking Portal
      │
      └──────────────► Municipal Dashboard
                              │
                              ▼
                   AI Recommendations
                              │
                              ▼
                     Hotspot Detection
                              │
                              ▼
                     Municipal Response
```

---

# 🛠 Tech Stack

| Category | Technology |
|----------|------------|
| Frontend | Next.js 16 |
| Language | TypeScript |
| Styling | Tailwind CSS |
| Database | Firebase Firestore |
| AI | Google Gemini AI |
| Maps | Leaflet |
| Charts | Chart.js |
| Deployment | Vercel |
| Version Control | Git + GitHub |

---

# 📂 Project Structure

```text
app/
 ├── dashboard/
 ├── report/
 ├── track/
 ├── map/
 ├── api/
 └── ...

components/
 ├── UploadForm.tsx
 ├── OfficerDashboard.tsx
 ├── DashboardCharts.tsx
 ├── AIRecommendationPanel.tsx
 ├── HotspotAlerts.tsx
 └── ...

lib/
 ├── firebase.ts
 ├── firestore.ts
 ├── aiRecommendation.ts
 ├── hotspot.ts
 └── ...

public/
types/
hooks/
```

---

# 🚀 Installation

Clone the repository:

```bash
git clone https://github.com/falco1-plk/nagriknetra-ai.git
```

Install dependencies:

```bash
npm install
```

Create a `.env.local` file and add your Firebase and Gemini credentials.

Run locally:

```bash
npm run dev
```

Production build:

```bash
npm run build
```

---

# 🌐 Application Flow

```text
Citizen Upload
       │
       ▼
Gemini AI Analysis
       │
       ▼
Firestore Database
       │
       ├────────► Tracking Portal
       │
       └────────► Officer Dashboard
                        │
                        ▼
                 Status Updates
                        │
                        ▼
               Citizen Tracking
```

---

# 🔮 Future Enhancements

- Officer Authentication
- Citizen Login
- Push Notifications
- Mobile Application
- Predictive Pollution Analytics
- Drone Integration
- Satellite Monitoring
- Government API Integration
- QR Code Tracking
- Multi-language Support

---

# 👨‍💻 Developed By

## Aishwary

B.Tech – Computer Science & Engineering  
Cloud Computing & Automation

GitHub:

https://github.com/falco1-plk

---

# 📜 Copyright

© 2026 Aishwary

NagrikNetra AI

All Rights Reserved.

This software and its source code were designed and developed by Aishwary.

Unauthorized copying, redistribution, commercial use, or claiming this work as your own is prohibited without written permission.

---

<div align="center">

⭐ If you found this project interesting, consider giving it a Star.

Made with using Next.js, Firebase and Google Gemini AI

</div>