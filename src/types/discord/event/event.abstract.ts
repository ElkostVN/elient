import type { ClientEvents } from 'discord.js';

import { AbstractClassError } from '#lib/index.js';
import type { IEvent } from '#types/index.js';

export abstract class AEvent<K extends keyof ClientEvents> implements IEvent<K>{
	async execute (..._args: ClientEvents[K]): Promise<void> {
		throw new AbstractClassError('Abstract method not implemented');
	}
}