import type { ClientEvents } from 'discord.js';

export interface IEvent<K extends keyof ClientEvents> {
	execute(...args: ClientEvents[K]): Promise<void>;
}