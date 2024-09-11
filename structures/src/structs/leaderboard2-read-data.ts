import { ELeaderboards2Types } from '../enums/'
import { Leaderboard2GroupHandle } from './leaderboard2-group-handle'

export class Leaderboard2ReadData {
	public readonly dataView: DataView;

	constructor(dataView: DataView = new DataView(new ArrayBuffer(288))) {
		if (dataView.byteLength !== 288) {
			throw new Error('Invalid buffer size');
		}

		this.dataView = dataView;
	}

	public get leaderboardId(): number {
		return this.dataView.getInt32(0, true)
	}

	public get type(): ELeaderboards2Types {
		return this.dataView.getInt32(8, true) as ELeaderboards2Types
	}

	public get clanId(): number {
		return this.dataView.getInt32(16, true)
	}

	public get groupSelector(): Leaderboard2GroupHandle {
		return new Leaderboard2GroupHandle(new DataView(this.dataView.buffer.slice(24, 264)))
	}
}