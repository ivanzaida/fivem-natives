export class HubEntry {
	public readonly dataView: DataView;

	constructor(dataView: DataView = new DataView(new ArrayBuffer(120))) {
		if (dataView.byteLength !== 120) {
			throw new Error('Invalid buffer size');
		}

		this.dataView = dataView;
	}

	public get type(): number {
		return this.dataView.getInt32(0, true)
	}

	public get properties(): number {
		return this.dataView.getInt32(8, true)
	}

	public get access(): number {
		return this.dataView.getInt32(16, true)
	}

	public get cost(): number {
		return this.dataView.getInt32(24, true)
	}

	public get bossId1(): number {
		return this.dataView.getInt32(32, true)
	}

	public get bossId2(): number {
		return this.dataView.getInt32(40, true)
	}

	public get playerRole(): number {
		return this.dataView.getInt32(48, true)
	}

	public get bpulled(): boolean {
		return this.dataView.getInt8(56) === 1;
	}

	public get binvited(): boolean {
		return this.dataView.getInt8(64) === 1;
	}

	public get properties2(): number {
		return this.dataView.getInt32(72, true)
	}

	public get vehicle(): number {
		return this.dataView.getInt32(80, true)
	}

	public get crewId(): number {
		return this.dataView.getInt32(88, true)
	}

	public get private(): boolean {
		return this.dataView.getInt8(96) === 1;
	}

	public get vehicleType(): number {
		return this.dataView.getInt32(104, true)
	}

	public get hubId(): number {
		return this.dataView.getInt32(112, true)
	}
}