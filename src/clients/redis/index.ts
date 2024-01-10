import Redis from "ioredis";

const REDIS_URL: string = process.env.REDIS_URL as string;

export const redisClient = new Redis(REDIS_URL);
