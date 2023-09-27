import { Client } from 'discord.js';

import { eventStore } from '#lib/discord/event-store.js';
import type { IClientOptions } from '#types/index.js';

export class Elient extends Client<true> {
	readonly #token: string;
	readonly #eventStore = eventStore;

	constructor ({ token, ...options }: IClientOptions) {
		super(options);
		this.#token = token;

		this.#eventStore.storage.forEach(event => this[event.mode](event.name, async (...args) => event.execute(...args)));
	}

	public async authenticate (): Promise<void> {
		await this.login(this.#token);
	}
}