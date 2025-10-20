# 📝 Task Tracker REST API

A complete **CRUD (Create, Read, Update, Delete)** REST API built with Node.js, Express, and MongoDB. This project is perfect for beginners learning backend development and serves as a solid foundation for building full-stack applications.

---

## 🎯 What This Project Does

This is a **backend API** (server) that manages a simple task list. It allows you to:

- ✅ Create new tasks
- ✅ View all tasks
- ✅ View a single task by ID
- ✅ Update tasks (mark as complete/incomplete)
- ✅ Delete tasks

**Think of it as the "brain" behind a to-do list app** - it stores data and responds to requests, but doesn't have a visual interface yet.

---

## 🏗️ Project Architecture

```
task-tracker/
│
├── config/
│   └── db.js                 # MongoDB connection logic
│
├── models/
│   └── Task.js              # Task data schema (structure)
│
├── routes/
│   └── taskRoutes.js        # API endpoints (URLs)
│
├── .env                     # Environment variables (SECRET - not in Git)
├── .gitignore              # Files to ignore in Git
├── server.js               # Main server file (entry point)
├── package.json            # Project dependencies
└── README.md               # This file!
```

---

## 🛠️ Technologies Used

| Technology | Purpose | Why We Use It |
|------------|---------|---------------|
| **Node.js** | JavaScript runtime | Lets us run JavaScript on the server |
| **Express** | Web framework | Makes creating APIs super easy |
| **MongoDB** | Database | Stores our task data in the cloud |
| **Mongoose** | MongoDB ODM | Simplifies database operations |
| **dotenv** | Environment variables | Keeps secrets safe |

---

## 📚 Prerequisites (What You Need Installed)

Before starting, make sure you have:

1. **Node.js** (version 14 or higher)
   - Check: `node -v`
   - Download: https://nodejs.org

2. **npm** (comes with Node.js)
   - Check: `npm -v`

3. **MongoDB Atlas Account** (free)
   - Sign up: https://www.mongodb.com/cloud/atlas

4. **Postman** (for testing)
   - Download: https://www.postman.com/downloads/

5. **Git** (for version control)
   - Check: `git --version`
   - Download: https://git-scm.com/

---

## 🚀 Installation & Setup

### Step 1: Clone the Repository

```bash
git clone https://github.com/YOUR_USERNAME/task-tracker.git
cd task-tracker
```

### Step 2: Install Dependencies

```bash
npm install
```

This installs:
- `express` - Web server framework
- `mongoose` - MongoDB object modeling
- `dotenv` - Environment variable loader

### Step 3: Set Up Environment Variables

Create a `.env` file in the project root:

```env
MONGO_URI=your_mongodb_atlas_connection_string_here
PORT=5000
```

**How to get your MongoDB connection string:**
1. Log in to MongoDB Atlas
2. Click "Connect" on your cluster
3. Choose "Connect your application"
4. Copy the connection string
5. Replace `<password>` with your actual password

Example:
```
MONGO_URI=mongodb+srv://username:password@cluster0.xxxxx.mongodb.net/taskdb
```

### Step 4: Run the Server

**Development mode (with auto-restart):**
```bash
npm run dev
```

**Production mode:**
```bash
npm start
```

You should see:
```
✅ MongoDB Connected
🚀 Server running on http://localhost:5000
```

---

## 📡 API Endpoints

### Base URL
```
http://localhost:5000
```

### Available Endpoints

| Method | Endpoint | Description | Request Body |
|--------|----------|-------------|--------------|
| `POST` | `/api/tasks` | Create a new task | `{ "title": "Task name" }` |
| `GET` | `/api/tasks` | Get all tasks | None |
| `GET` | `/api/tasks/:id` | Get single task by ID | None |
| `PUT` | `/api/tasks/:id` | Update a task | `{ "title": "New name", "completed": true }` |
| `DELETE` | `/api/tasks/:id` | Delete a task | None |

---

## 🧪 Testing with Postman

### 1️⃣ Create a Task (POST)

**Request:**
- Method: `POST`
- URL: `http://localhost:5000/api/tasks`
- Body (JSON):
```json
{
  "title": "Learn Node.js"
}
```

**Response (201 Created):**
```json
{
  "_id": "507f1f77bcf86cd799439011",
  "title": "Learn Node.js",
  "completed": false,
  "createdAt": "2025-10-20T12:00:00.000Z",
  "__v": 0
}
```

---

### 2️⃣ Get All Tasks (GET)

**Request:**
- Method: `GET`
- URL: `http://localhost:5000/api/tasks`

**Response (200 OK):**
```json
[
  {
    "_id": "507f1f77bcf86cd799439011",
    "title": "Learn Node.js",
    "completed": false,
    "createdAt": "2025-10-20T12:00:00.000Z"
  }
]
```

---

### 3️⃣ Get Single Task (GET)

**Request:**
- Method: `GET`
- URL: `http://localhost:5000/api/tasks/507f1f77bcf86cd799439011`

**Response (200 OK):**
```json
{
  "_id": "507f1f77bcf86cd799439011",
  "title": "Learn Node.js",
  "completed": false,
  "createdAt": "2025-10-20T12:00:00.000Z"
}
```

---

### 4️⃣ Update a Task (PUT)

**Request:**
- Method: `PUT`
- URL: `http://localhost:5000/api/tasks/507f1f77bcf86cd799439011`
- Body (JSON):
```json
{
  "completed": true
}
```

**Response (200 OK):**
```json
{
  "_id": "507f1f77bcf86cd799439011",
  "title": "Learn Node.js",
  "completed": true,
  "createdAt": "2025-10-20T12:00:00.000Z"
}
```

---

### 5️⃣ Delete a Task (DELETE)

**Request:**
- Method: `DELETE`
- URL: `http://localhost:5000/api/tasks/507f1f77bcf86cd799439011`

**Response (200 OK):**
```json
{
  "message": "Task deleted"
}
```

---

## 🧠 How It Works (Complete Explanation)

### The Request Flow

```
Client (Postman/Frontend)
    ↓
    ↓ HTTP Request (e.g., POST /api/tasks)
    ↓
Express Server (server.js)
    ↓
    ↓ Routes to appropriate handler
    ↓
Route Handler (taskRoutes.js)
    ↓
    ↓ Uses Mongoose model
    ↓
Mongoose Model (Task.js)
    ↓
    ↓ Queries database
    ↓
MongoDB Atlas (Cloud Database)
    ↓
    ↓ Returns data
    ↓
Response back to Client (JSON)
```

---

### File-by-File Breakdown

#### **`server.js`** - The Entry Point
This is where everything starts. It:
1. Loads environment variables from `.env`
2. Connects to MongoDB
3. Sets up Express middleware
4. Registers routes
5. Starts the server

```javascript
// Key parts:
dotenv.config();              // Load .env file
connectDB();                  // Connect to MongoDB
app.use(express.json());      // Parse JSON request bodies
app.use('/api/tasks', ...);   // Register task routes
app.listen(PORT, ...);        // Start server
```

---

#### **`config/db.js`** - Database Connection
Handles connecting to MongoDB Atlas:

```javascript
// What it does:
1. Takes MONGO_URI from .env
2. Uses Mongoose to connect
3. Logs success or error
4. Exits app if connection fails
```

**Why separate file?** Keeps code organized and reusable.

---

#### **`models/Task.js`** - Data Schema
Defines what a "task" looks like in the database:

```javascript
// Task structure:
{
  title: String (required, no extra spaces)
  completed: Boolean (default: false)
  createdAt: Date (auto-generated)
}
```

**What is a Schema?** Like a blueprint - it enforces rules on your data.

---

#### **`routes/taskRoutes.js`** - API Endpoints
Contains all the CRUD operations:

```javascript
// Each route does one thing:
POST   /       → Create new task
GET    /       → Get all tasks
GET    /:id    → Get one task
PUT    /:id    → Update task
DELETE /:id    → Delete task
```

**What is `:id`?** A URL parameter - a placeholder for the actual task ID.

---

### Understanding Async/Await

You'll see `async` and `await` everywhere:

```javascript
router.get('/', async (req, res) => {
  const tasks = await Task.find();  // Wait for database
  res.json(tasks);                   // Then send response
});
```

**Why?** Database operations take time - `await` makes code wait for the result.

---

### Error Handling

Every route has a try-catch block:

```javascript
try {
  // Try to do something
  const task = await Task.create(req.body);
  res.json(task);
} catch (err) {
  // If it fails, send error
  res.status(500).json({ error: err.message });
}
```

**Why?** Prevents server crashes when things go wrong.

---

## 🐛 Common Errors & Solutions

### ❌ Error: "Could not connect to MongoDB"
**Cause:** Wrong connection string or network issue

**Solution:**
1. Check `.env` file has correct `MONGO_URI`
2. Verify password in connection string
3. Whitelist your IP in MongoDB Atlas:
   - Go to Network Access
   - Click "Add IP Address"
   - Add `0.0.0.0/0` (for development only!)

---

### ❌ Error: "Port 5000 already in use"
**Cause:** Another app is using port 5000

**Solution:**
Change port in `.env`:
```
PORT=3000
```

Or kill the process:
```bash
# Mac/Linux:
lsof -i :5000
kill -9 <PID>

# Windows:
netstat -ano | findstr :5000
taskkill /PID <PID> /F
```

---

### ❌ Error: "Title is required"
**Cause:** Forgot to send `title` in request body

**Solution:**
In Postman:
1. Click "Body" tab
2. Select "raw" and "JSON"
3. Include: `{ "title": "something" }`

---

### ❌ Error: "Task not found"
**Cause:** Invalid or non-existent task ID

**Solution:**
1. Use GET `/api/tasks` to see all IDs
2. Copy the correct `_id`
3. Use that exact ID in your request

---

## 📖 Learning Resources

### For Beginners:
- **Node.js:** https://nodejs.dev/learn
- **Express:** https://expressjs.com/en/starter/hello-world.html
- **MongoDB:** https://university.mongodb.com (free courses)
- **REST API Basics:** https://restfulapi.net/

### Video Tutorials:
- Traversy Media (YouTube)
- The Net Ninja (YouTube)
- FreeCodeCamp (YouTube)

---

## 🎯 Next Steps (How to Improve This Project)

### Beginner Level:
- ✅ Add more fields to tasks (description, dueDate, priority)
- ✅ Add data validation (title must be 3-100 characters)
- ✅ Add task categories/tags

### Intermediate Level:
- 🔐 Add user authentication (JWT)
- 🎨 Build a React frontend
- ☁️ Deploy to Render/Railway
- 📧 Send email notifications for tasks

### Advanced Level:
- 🔄 Add real-time updates (Socket.io)
- 🔍 Add search and filtering
- 📊 Add analytics/statistics
- 🧪 Add unit tests (Jest)
- 🐳 Containerize with Docker

---

## 🤝 Contributing

Want to improve this project? Here's how:

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Commit changes: `git commit -m 'Add feature'`
4. Push to branch: `git push origin feature-name`
5. Open a Pull Request

---

## 📝 Project Structure Explained (Beginner-Friendly)

```
task-tracker/
│
├── config/                    # Configuration files
│   └── db.js                 # "How to talk to database"
│
├── models/                    # Data blueprints
│   └── Task.js              # "What does a task look like?"
│
├── routes/                    # API endpoints
│   └── taskRoutes.js        # "What URLs exist and what they do"
│
├── node_modules/             # Installed packages (DON'T TOUCH!)
│
├── .env                      # Secret keys (NEVER COMMIT!)
├── .gitignore               # "Don't push these files to GitHub"
├── package.json             # Project info & dependencies
├── package-lock.json        # Exact versions (auto-generated)
├── server.js                # Main file - "Start here!"
└── README.md                # You are here!
```

---

## 🔑 Key Concepts Explained

### What is REST?
**RE**presentational **S**tate **T**ransfer

Simply: A way to structure APIs using HTTP methods:
- `GET` = Read data
- `POST` = Create data
- `PUT` = Update data
- `DELETE` = Delete data

---

### What is CRUD?
The four basic operations of persistent storage:
- **C**reate - Add new data
- **R**ead - Get/view data
- **U**pdate - Modify data
- **D**elete - Remove data

---

### What is an API?
**A**pplication **P**rogramming **I**nterface

Simply: A way for different programs to talk to each other.

**Example:** 
- Your frontend (website) talks to your backend (this API)
- Your backend talks to MongoDB (database)

---

### What is Middleware?
Functions that run BETWEEN receiving a request and sending a response.

```javascript
app.use(express.json());  // Middleware that parses JSON
```

Think: Security checkpoint, translator, or middleman.

---

### What is MongoDB?
A **NoSQL** database that stores data as JSON-like documents.

**Why MongoDB?**
- Easy to learn
- Flexible structure
- Works great with JavaScript
- Free cloud hosting (Atlas)

---

## 💡 Tips for Understanding the Code

### 1. Read Files in This Order:
```
1. server.js       (understand the big picture)
2. config/db.js    (how we connect to database)
3. models/Task.js  (what data looks like)
4. routes/taskRoutes.js (the actual functionality)
```

### 2. Follow a Single Request:
Pick one (e.g., "Create Task") and trace it:
```
1. Postman sends POST /api/tasks
2. server.js receives it
3. Express routes to taskRoutes.js
4. POST / handler runs
5. Task.create() saves to MongoDB
6. Response sent back to Postman
```

### 3. Experiment!
- Change error messages
- Add console.log() everywhere
- Break things intentionally
- Fix them - you'll learn more!

---

## 🎓 What You'll Learn From This Project

### Technical Skills:
- ✅ Node.js basics
- ✅ Express routing
- ✅ MongoDB/Mongoose
- ✅ REST API design
- ✅ Environment variables
- ✅ Error handling
- ✅ Async/await
- ✅ HTTP methods
- ✅ JSON data format

### Practical Skills:
- ✅ Reading documentation
- ✅ Debugging errors
- ✅ Using Postman
- ✅ Git version control
- ✅ Project organization

---

## 📞 Need Help?

### Common Questions:

**Q: Can I use this in my own projects?**  
A: Yes! This is a learning project - feel free to use and modify it.

**Q: How do I add more features?**  
A: Start with the models/Task.js - add new fields there first.

**Q: Is this production-ready?**  
A: Not quite. You'd need to add: authentication, better error handling, rate limiting, security headers, and more validation.

**Q: Can I build a frontend for this?**  
A: Absolutely! Use React, Vue, or vanilla HTML/CSS/JS. Just make fetch() calls to these endpoints.

---

## 🌟 Project Checklist

Use this to track your learning:

- [ ] Understood what REST API means
- [ ] Understood CRUD operations
- [ ] Set up Node.js project
- [ ] Connected to MongoDB
- [ ] Created all 5 routes
- [ ] Tested with Postman
- [ ] Understood async/await
- [ ] Understood middleware
- [ ] Read all code comments
- [ ] Experimented with changes
- [ ] Pushed to GitHub
- [ ] (Optional) Built a frontend
- [ ] (Optional) Deployed online

---

## 📜 License

This project is open source and available for learning purposes.

---

## 👨‍💻 Author

**Your Name**
- GitHub: [@yourusername](https://github.com/yourusername)
- Email: your.email@example.com

---

## 🙏 Acknowledgments

Built while learning backend development. Special thanks to:
- Express.js documentation
- MongoDB University
- The developer community

---

**⭐ If this helped you learn, please star the repo!**

---

*Last updated: October 2025*
