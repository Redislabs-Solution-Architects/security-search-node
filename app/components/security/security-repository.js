import { Repository, Schema } from 'redis-om';

import { redis } from '../../om/client.js';

const securitySchema = new Schema('security', {
  securityName: { type: 'text' },
  securityId: { type: 'string' },
  cusip: { type: 'string' },
  isin: { type: 'string' },
  symbol: { type: 'string' },
});

export const securityRepository = new Repository(securitySchema, redis);

await securityRepository.createIndex();
