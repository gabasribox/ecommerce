import { PrismaClient } from "@prisma/client";

/* Singleton (uses the existing instance or creates a new one) */
const prismaClientSingleton = () => {
  return new PrismaClient();
};

declare const globalThis: {
  prismaGlobal: ReturnType<typeof prismaClientSingleton>;
} & typeof global;

const prisma = globalThis.prismaGlobal ?? prismaClientSingleton();

/* During the development, stores in the global scope for hot-reload */
if (process.env.NODE_ENV !== 'production') 
  globalThis.prismaGlobal = prisma;

/* Exports the variable */
export default prisma;