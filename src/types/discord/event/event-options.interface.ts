import type { ClientEvents } from 'discord.js';

export interface IEventOptions<K extends keyof ClientEvents> {
	name: K;
	mode: 'on' | 'once';
}