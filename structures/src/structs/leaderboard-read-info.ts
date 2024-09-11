export class LeaderboardReadInfo {
	public readonly dataView: DataView;

	constructor(dataView: DataView = new DataView(new ArrayBuffer(64))) {
		if (dataView.byteLength !== 64) {
			throw new Error('Invalid buffer size');
		}

		this.dataView = dataView;
	}

	public get leaderboardId(): number {
		return this.dataView.getInt32(0, true)
	}

	public get leaderboardType(): number {
		return this.dataView.getInt32(8, true)
	}

	public get leaderboardIndex(): number {
		return this.dataView.getInt32(16, true)
	}

	public get returnedRows(): number {
		return this.dataView.getInt32(24, true)
	}

	public get totalRows(): number {
		return this.dataView.getInt32(32, true)
	}

	public get localGamerRowNumber(): number {
		return this.dataView.getInt32(40, true)
	}

	public get localGamerRankInt(): number {
		return this.dataView.getInt32(48, true)
	}

	public get localGamerRankFloat(): number {
		return this.dataView.getFloat32(56, true)
	}
}