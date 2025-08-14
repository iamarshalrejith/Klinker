# Klinker 

A modern, real-time chat application built with the MERN stack and Socket.IO for seamless communication.

![Website Preview](./public/fav-icon.jpg)

[Klinker Chat App](https://klinker.onrender.com)

## ✨ Features

- **Real-time messaging** with Socket.IO
- **User authentication** (signup, login, logout)
- **Responsive design** with modern UI
- **Online status indicators**
- **Message history** persistence
- **Secure JWT-based authentication**
- **Avatar generation** for user profiles
- **Mobile-friendly** interface

## 🛠️ Tech Stack

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **MongoDB** - Database
- **Mongoose** - ODM for MongoDB
- **Socket.IO** - Real-time communication
- **JWT** - Authentication tokens
- **bcryptjs** - Password hashing

### Frontend
- **React** - UI library
- **Vite** - Build tool and dev server
- **Zustand** - State management
- **DaisyUI** - UI component library
- **Tailwind CSS** - Styling

## 🚀 Quick Start

### Prerequisites
- Node.js (v18 or higher)
- MongoDB account (MongoDB Atlas recommended)
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/iamarshalrejith/Klinker.git
   cd Klinker
   ```

2. **Install dependencies**
   ```bash
   npm install
   npm install --prefix frontend
   ```

3. **Environment Setup**
   
   Create a `.env` file in the root directory:
   ```env
   PORT=5000
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_super_secret_jwt_key
   NODE_ENV=development
   ```

4. **Build the frontend**
   ```bash
   npm run build
   ```

5. **Start the application**
   ```bash
   npm start
   ```

The app will be available at `http://localhost:5000`

## 📝 Scripts

| Script | Description |
|--------|-------------|
| `npm start` | Start the production server |
| `npm run server` | Start development server with nodemon |
| `npm run build` | Build the entire application |

## 🏗️ Project Structure

```
Klinker/
├── backend/
│   ├── controllers/     # Route controllers
│   ├── middleware/      # Custom middleware
│   ├── models/         # Mongoose models
│   ├── routes/         # API routes
│   ├── socket/         # Socket.IO configuration
│   ├── utils/          # Utility functions
│   └── server.js       # Main server file
├── frontend/
│   ├── src/
│   │   ├── components/ # React components
│   │   ├── context/    # React context
│   │   ├── hooks/      # Custom hooks
│   │   ├── pages/      # Page components
│   │   ├── store/      # Zustand store
│   │   └── utils/      # Frontend utilities
│   └── dist/          # Built frontend files
├── .env               # Environment variables
└── package.json      # Project dependencies
```

## 🔧 Configuration

### MongoDB Setup
1. Create a MongoDB Atlas account
2. Create a new cluster
3. Get your connection string
4. Add it to your `.env` file

### JWT Secret
Generate a secure JWT secret:
```bash
node -e "console.log(require('crypto').randomBytes(64).toString('base64'))"
```

## 📱 Usage

1. **Register** a new account or **login** with existing credentials
2. **Browse users** in the sidebar
3. **Click on a user** to start chatting
4. **Send messages** in real-time
5. **See online status** of other users

## 🔒 Security Features

- Password hashing with bcryptjs
- JWT-based authentication
- HTTP-only cookies for token storage
- Input validation and sanitization
- Protected routes middleware

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👤 Author

**Arshal Rejith**
- GitHub: [@iamarshalrejith](https://github.com/iamarshalrejith)


<div align="center">
  <p>⭐ Star this repo if you found it helpful!</p>
  <p>🐛 Found a bug? <a href="https://github.com/iamarshalrejith/Klinker/issues">Report it here</a></p>
</div>
