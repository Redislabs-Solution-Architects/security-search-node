import { createClient } from 'redis';

import { config } from '../config.js';
const url = `${config.redisHost}:${config.redisPort}`;

export const redis = createClient({ url });

redis.on('error', (error) => console.log('Redis Client Error', error));

await redis.connect();
