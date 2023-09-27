import type { ClientEvents } from 'discord.js';

import type { IEventStore, TDecoratedEvent } from '#types/index.js';

export abstract class AEventStore implements IEventStore {
	abstract storage: Map<keyof ClientEvents, TDecoratedEvent>;

	abstract add(event: TDecoratedEvent): void
}