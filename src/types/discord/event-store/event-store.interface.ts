import type { ClientEvents } from 'discord.js';

import type { TDecoratedEvent } from '#types/index.js';

export interface IEventStore {
	storage: Map<keyof ClientEvents, TDecoratedEvent>;

	add(event: TDecoratedEvent): void;
}