export class MatchStartInfo {
	public readonly dataView: DataView;

	constructor(dataView: DataView = new DataView(new ArrayBuffer(64))) {
		if (dataView.byteLength !== 64) {
			throw new Error('Invalid buffer size');
		}

		this.dataView = dataView;
	}

	public get matchType(): number {
		return this.dataView.getInt32(0, true)
	}

	public get hashedMac(): number {
		return this.dataView.getInt32(8, true)
	}

	public get posixTime(): number {
		return this.dataView.getInt32(16, true)
	}

	public get oncalljointime(): number {
		return this.dataView.getInt32(24, true)
	}

	public get oncalljoinstate(): number {
		return this.dataView.getInt32(32, true)
	}

	public get missionDifficulty(): number {
		return this.dataView.getInt32(40, true)
	}

	public get missionLaunch(): number {
		return this.dataView.getInt32(48, true)
	}

	public get rootContentId(): number {
		return this.dataView.getInt32(56, true)
	}
}