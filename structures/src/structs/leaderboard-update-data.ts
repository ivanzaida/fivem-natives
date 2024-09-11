import { Leaderboard2GroupHandle } from './leaderboard2-group-handle'

export class LeaderboardUpdateData {
	public readonly dataView: DataView;

	constructor(dataView: DataView = new DataView(new ArrayBuffer(280))) {
		if (dataView.byteLength !== 280) {
			throw new Error('Invalid buffer size');
		}

		this.dataView = dataView;
	}

	public get leaderboardId(): number {
		return this.dataView.getInt32(0, true)
	}

	public get clanId(): number {
		return this.dataView.getInt32(8, true)
	}

	public get groupSelector(): Leaderboard2GroupHandle {
		return new Leaderboard2GroupHandle(new DataView(this.dataView.buffer.slice(16, 264)))
	}
}