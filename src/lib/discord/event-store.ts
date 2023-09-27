import type { ClientEvents } from 'discord.js';

import { EventValidationError } from '#lib/errors/event-validation.error.js';
import { AEventStore, type IEventWrapper } from '#types/index.js';

export const eventStore = new class EventStore extends AEventStore {
	public storage = new Map<keyof ClientEvents, IEventWrapper<keyof ClientEvents>>();

	public add (event: IEventWrapper<keyof ClientEvents>): void {
		this.validateEvent(event);
		this.storage.set(event.name, event);
	}

	private validateEvent (event: IEventWrapper<keyof ClientEvents>): void {
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