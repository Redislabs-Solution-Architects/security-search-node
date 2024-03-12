import { Repository, Schema } from 'redis-om';

import { redis } from '../../om/client.js';

const securitySchema = new Schema('security', {
  name: { type: 'text' },
  id: { type: 'string' },
  cusip: { type: 'string' },
  isin: { type: 'string' },
  symbol: { type: 'string' },
});

export const securityRepository = new Repository(securitySchema, redis);

await securityRepository.createIndex();
