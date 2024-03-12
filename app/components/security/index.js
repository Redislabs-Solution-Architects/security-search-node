export * from './security-router.js';

import { securityRepository } from './security-repository.js';

export const repositories = {
    security: securityRepository,
};
