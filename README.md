# 🌍 Countries App

## 📚 Description
This project is part of the **React Advanced Course** assignment.  
It’s a web application built with **Next.js, React, Redux Toolkit, Supabase, and MUI**.  
The app allows users to:
- Browse countries and view detailed information  
- Sign in with **Google Authentication (via Supabase)**  
- Add or remove countries from their **favourites list**  
- Store user-specific favourites in a **Supabase database**

---

## 🧰 Technologies Used
| Technology | Purpose |
|-------------|----------|
| **Next.js / React** | Frontend framework |
| **React Redux + Redux Toolkit** | State management |
| **React Router Dom** | Routing between pages |
| **Supabase** | Authentication & Database |
| **Google Auth** | Social login |
| **Material UI (MUI)** | UI components and icons |
| **JSONB (Supabase)** | Storing country data in favourites |

---

## 🔐 Features
✅ Google login using Supabase authentication 
✅ Unique constraint to prevent duplicate favourites per user  
✅ Dynamic favourite button (heart icon ❤️)  
✅ Persistent user-specific data  
✅ Clean and responsive UI with MUI  

---

## How to Run the Project

1. **Clone the repository**
   ```bash
   git clone https://github.com/DarjaElina/countries-app.git
   cd countries-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Create a `.env.local` file** in the root folder and add your Supabase credentials:
   ```env
   NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
   SUPABASE_SERVICE_ROLE_KEY=your_service_role_key
   NEXT_PUBLIC_GOOGLE_CLIENT_ID=your_google_client_id
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```

