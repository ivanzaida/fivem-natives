import { GamerHandle } from './gamer-handle'
import { Leaderboard2GroupHandle } from './leaderboard2-group-handle'
import { StringRef } from '../types/string-ref';

export class LeaderboardRowData {
	public readonly dataView: DataView;

	constructor(dataView: DataView = new DataView(new ArrayBuffer(456))) {
		if (dataView.byteLength !== 456) {
			throw new Error('Invalid buffer size');
		}

		this.dataView = dataView;
	}

	public get gamerHandle(): GamerHandle {
		return new GamerHandle(new DataView(this.dataView.buffer.slice(0, 104)))
	}

	public get gamerName(): string {
		return new StringRef(new DataView(this.dataView.buffer.slice(104, 23))).value
	}

	public get groupSelector(): Leaderboard2GroupHandle {
		return new Leaderboard2GroupHandle(new DataView(this.dataView.buffer.slice(128, 264)))
	}

	public get clanId(): number {
		return this.dataView.getInt32(392, true)
	}

	public get clanName(): string {
		return new StringRef(new DataView(this.dataView.buffer.slice(400, 31))).value
	}

	public get clanTag(): string {
		return new StringRef(new DataView(this.dataView.buffer.slice(432, 7))).value
	}

	public get rank(): number {
		return this.dataView.getInt32(440, true)
	}

	public get numColumnValues(): number {
		return this.dataView.getInt32(448, true)
	}
}