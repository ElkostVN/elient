import type { ClientEvents } from 'discord.js';

import type { IEvent } from '#types/index.js';

export abstract class AEvent<K extends keyof ClientEvents> implements IEvent<K>{
	abstract execute(...args: ClientEvents[K]): Promise<void>;
}