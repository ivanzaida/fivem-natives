import { GamerHandle } from './gamer-handle'

export class GamersHandles {
	public readonly dataView: DataView;

	constructor(dataView: DataView = new DataView(new ArrayBuffer(104))) {
		if (dataView.byteLength !== 104) {
			throw new Error('Invalid buffer size');
		}

		this.dataView = dataView;
	}

	public get gamerHandle(): GamerHandle {
		return new GamerHandle(new DataView(this.dataView.buffer.slice(0, 104)))
	}
}