export class HubExit {
	public readonly dataView: DataView;

	constructor(dataView: DataView = new DataView(new ArrayBuffer(80))) {
		if (dataView.byteLength !== 80) {
			throw new Error('Invalid buffer size');
		}

		this.dataView = dataView;
	}

	public get hubID(): number {
		return this.dataView.getInt32(0, true)
	}

	public get type(): number {
		return this.dataView.getInt32(8, true)
	}

	public get bossId1(): number {
		return this.dataView.getInt32(16, true)
	}

	public get bossId2(): number {
		return this.dataView.getInt32(24, true)
	}

	public get playerRole(): number {
		return this.dataView.getInt32(32, true)
	}

	public get pulled(): number {
		return this.dataView.getInt32(40, true)
	}

	public get crewId(): number {
		return this.dataView.getInt32(48, true)
	}

	public get duration(): number {
		return this.dataView.getInt32(56, true)
	}

	public get dre(): boolean {
		return this.dataView.getInt8(64) === 1;
	}

	public get playerCount(): number {
		return this.dataView.getInt32(72, true)
	}
}