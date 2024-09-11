import { GamerHandle } from './gamer-handle'

export class SessionInvite {
	public readonly dataView: DataView;

	constructor(dataView: DataView = new DataView(new ArrayBuffer(3224))) {
		if (dataView.byteLength !== 3224) {
			throw new Error('Invalid buffer size');
		}

		this.dataView = dataView;
	}

	public get invitees(): GamerHandle[] {
		return [
			new GamerHandle(new DataView(this.dataView.buffer.slice(0, 104))),
			new GamerHandle(new DataView(this.dataView.buffer.slice(104, 104))),
			new GamerHandle(new DataView(this.dataView.buffer.slice(208, 104))),
			new GamerHandle(new DataView(this.dataView.buffer.slice(312, 104))),
			new GamerHandle(new DataView(this.dataView.buffer.slice(416, 104))),
			new GamerHandle(new DataView(this.dataView.buffer.slice(520, 104))),
			new GamerHandle(new DataView(this.dataView.buffer.slice(624, 104))),
			new GamerHandle(new DataView(this.dataView.buffer.slice(728, 104))),
			new GamerHandle(new DataView(this.dataView.buffer.slice(832, 104))),
			new GamerHandle(new DataView(this.dataView.buffer.slice(936, 104))),
			new GamerHandle(new DataView(this.dataView.buffer.slice(1040, 104))),
			new GamerHandle(new DataView(this.dataView.buffer.slice(1144, 104))),
			new GamerHandle(new DataView(this.dataView.buffer.slice(1248, 104))),
			new GamerHandle(new DataView(this.dataView.buffer.slice(1352, 104))),
			new GamerHandle(new DataView(this.dataView.buffer.slice(1456, 104))),
			new GamerHandle(new DataView(this.dataView.buffer.slice(1560, 104))),
			new GamerHandle(new DataView(this.dataView.buffer.slice(1664, 104))),
			new GamerHandle(new DataView(this.dataView.buffer.slice(1768, 104))),
			new GamerHandle(new DataView(this.dataView.buffer.slice(1872, 104))),
			new GamerHandle(new DataView(this.dataView.buffer.slice(1976, 104))),
			new GamerHandle(new DataView(this.dataView.buffer.slice(2080, 104))),
			new GamerHandle(new DataView(this.dataView.buffer.slice(2184, 104))),
			new GamerHandle(new DataView(this.dataView.buffer.slice(2288, 104))),
			new GamerHandle(new DataView(this.dataView.buffer.slice(2392, 104))),
			new GamerHandle(new DataView(this.dataView.buffer.slice(2496, 104))),
			new GamerHandle(new DataView(this.dataView.buffer.slice(2600, 104))),
			new GamerHandle(new DataView(this.dataView.buffer.slice(2704, 104))),
			new GamerHandle(new DataView(this.dataView.buffer.slice(2808, 104))),
			new GamerHandle(new DataView(this.dataView.buffer.slice(2912, 104))),
			new GamerHandle(new DataView(this.dataView.buffer.slice(3016, 104))),
			new GamerHandle(new DataView(this.dataView.buffer.slice(3120, 104)))
		]
	}
}