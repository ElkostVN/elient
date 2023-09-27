import type { ClientEvents } from 'discord.js';

import type { IEventOptions } from '#types/index.js';

export interface IEventWrapper<K extends keyof ClientEvents> {
	readonly name: IEventOptions<K>['name'];
	readonly mode: IEventOptions<K>['mode'];

	execute(...args: ClientEvents[K]): Promise<void>;
}