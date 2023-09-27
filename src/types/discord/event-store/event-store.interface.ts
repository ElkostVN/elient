import type { ClientEvents } from 'discord.js';

import type { IEventWrapper } from '#types/index.js';

export interface IEventStore {
	storage: Map<keyof ClientEvents, IEventWrapper<keyof ClientEvents>>;

	add(event: IEventWrapper<keyof ClientEvents>): void;
}