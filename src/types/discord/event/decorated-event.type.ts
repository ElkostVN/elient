import type { ClientEvents } from 'discord.js';

import type { AEvent, IEventOptions } from '#types/index.js';

export type TDecoratedEvent = AEvent<keyof ClientEvents> & IEventOptions<keyof ClientEvents>