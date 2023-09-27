import type { ClientEvents } from 'discord.js';

import { eventStore } from '#lib/index.js';
import type { AEvent, IEventOptions } from '#types/index.js';

export function Event<K extends keyof ClientEvents, T extends { new (...args: any[]): AEvent<K> }>({ name, mode }: IEventOptions<K>) {
	return (constructor: T): void => {
		eventStore.add(new class extends constructor {
			public readonly name = name;
			public readonly mode = mode;
		});
	};
}