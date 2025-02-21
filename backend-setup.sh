# Backend kurulumu
mkdir backend
cd backend
npm init -y
npm install express typescript ts-node @types/node @types/express
npm install pg typeorm reflect-metadata  # PostgreSQL ve ORM
npm install dotenv cors helmet  # Utilities
npm install jsonwebtoken bcryptjs  # Authentication 