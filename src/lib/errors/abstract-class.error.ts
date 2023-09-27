export class AbstractClassError extends Error {
	constructor (message: string) {
		super(message);
		this.name = 'AbstractClassError';
	}
}