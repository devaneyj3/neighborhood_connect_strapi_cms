'use strict';

/**
 * turn-event service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::turn-event.turn-event');
