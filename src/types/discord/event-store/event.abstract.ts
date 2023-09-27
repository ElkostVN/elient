import type { ClientEvents } from 'discord.js';

import type { IEventStore, IEventWrapper } from '#types/index.js';

export abstract class AEventStore implements IEventStore {
	abstract storage: Map<keyof ClientEvents, IEventWrapper<keyof ClientEvents>>;

	abstract add(event: IEventWrapper<keyof ClientEvents>): void
}