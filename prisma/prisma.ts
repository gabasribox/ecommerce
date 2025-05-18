import { PrismaClient } from "@prisma/client";

/* Safe typing of the global to avoid conflicts */
const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};

/* Singleton (uses the existing instance or creates a new one)*/
const prisma = globalForPrisma.prisma ?? new PrismaClient();

/* During the development, stores in the global scope for hot-reload */
if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma;

/* Exports the variable */
export default prisma;