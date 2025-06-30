# 🔌 Electric Meter Inspection Submission Website (Demo)

A full-stack web application that allows staff to submit electric meter inspection results and allows admins to manage them.  
Designed for trial use with annual inspection schedules.

---

## 🔧 Tech Stack

- **Frontend**: React.js
- **Backend**: Node.js (Express)
- **Database**: MySQL (XAMPP)

---

## 👥 User Roles

### 👤 USER
- Submit electric meter inspection results
- View their own submission history

### 🛠️ ADMIN
- Review all submitted inspection data
- Search/filter by date, location, or user

---

## 🖼️ Interface Preview


### USER
![User Interface](assets/user/user1.png)
![User Interface](assets/user/user2.png)
![User Interface](assets/user/user3.png)
![User Interface](assets/user/user4.png)
![User Interface](assets/user/user5.png)
![User Interface](assets/user/user6.png)

### ADMIN
![Admin Interface](assets/admin/admin1.png)
![Admin Interface](assets/admin/admin2.png)
![Admin Interface](assets/admin/admin3.png)
![Admin Interface](assets/admin/admin4.png)
![Admin Interface](assets/admin/admin5.png)

---



## 🚀 How to Run Locally

### 📁 Prerequisites

- Install [XAMPP](https://www.apachefriends.org/index.html)
- Start **Apache** and **MySQL** from XAMPP Control Panel
- Create a database (e.g., `electric_meter_db`)
- Import your SQL schema using `phpMyAdmin`

---


### Backend
```bash
cd backend
npm install
npm run dev
```



### Frontend
```bash
cd frontend
npm install
npm start
```