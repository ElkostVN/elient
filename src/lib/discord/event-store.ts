import type { ClientEvents } from 'discord.js';

import { EventValidationError } from '#lib/errors/event-validation.error.js';
import { AEventStore, type TDecoratedEvent } from '#types/index.js';

export const eventStore = new class EventStore extends AEventStore {
	public storage = new Map<keyof ClientEvents, TDecoratedEvent>();

	public add (event: TDecoratedEvent): void {
		this.validateEvent(event);
		this.storage.set(event.name, event);
	}

	public validateEvent (event: TDecoratedEvent): void {
		if (
			typeof event['name'] !== 'string'
			|| String(event['name']).length === 0
		) throw new EventValidationError('Event name must be string and cannot be empty');

		if (
			typeof event['mode'] !== 'string'
			|| (event['mode'] !== 'on' && event['mode']!== 'once')
		) throw new EventValidationError('Event mode must be "on" or "once"');

		if (
			typeof event['execute'] !== 'function'
		) throw new EventValidationError('Event execute must be a function');
	}
};