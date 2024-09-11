import { Leaderboard2Group } from './leaderboard2-group'

export class Leaderboard2GroupHandle {
	public readonly dataView: DataView;

	constructor(dataView: DataView = new DataView(new ArrayBuffer(264))) {
		if (dataView.byteLength !== 264) {
			throw new Error('Invalid buffer size');
		}

		this.dataView = dataView;
	}

	public get numGroups(): number {
		return this.dataView.getInt32(0, true)
	}

	public get group(): Leaderboard2Group[] {
		return [
			new Leaderboard2Group(new DataView(this.dataView.buffer.slice(8, 64))),
			new Leaderboard2Group(new DataView(this.dataView.buffer.slice(72, 64))),
			new Leaderboard2Group(new DataView(this.dataView.buffer.slice(136, 64))),
			new Leaderboard2Group(new DataView(this.dataView.buffer.slice(200, 64)))
		]
	}
}