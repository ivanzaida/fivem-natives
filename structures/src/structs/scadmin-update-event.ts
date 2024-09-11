export class ScadminUpdateEvent {
	public readonly dataView: DataView;

	constructor(dataView: DataView = new DataView(new ArrayBuffer(192))) {
		if (dataView.byteLength !== 192) {
			throw new Error('Invalid buffer size');
		}

		this.dataView = dataView;
	}

	public get fullRefreshRequested(): number {
		return this.dataView.getInt32(0, true)
	}

	public get updatePlayerBalance(): number {
		return this.dataView.getInt32(8, true)
	}

	public get awardTypeHash(): number {
		return this.dataView.getInt32(16, true)
	}

	public get awardAmount(): number {
		return this.dataView.getInt32(24, true)
	}

	public get items(): number[] {
		return [
			this.dataView.getInt32(32, true),
			this.dataView.getInt32(40, true),
			this.dataView.getInt32(48, true),
			this.dataView.getInt32(56, true),
			this.dataView.getInt32(64, true),
			this.dataView.getInt32(72, true),
			this.dataView.getInt32(80, true),
			this.dataView.getInt32(88, true),
			this.dataView.getInt32(96, true),
			this.dataView.getInt32(104, true),
			this.dataView.getInt32(112, true),
			this.dataView.getInt32(120, true),
			this.dataView.getInt32(128, true),
			this.dataView.getInt32(136, true),
			this.dataView.getInt32(144, true),
			this.dataView.getInt32(152, true),
			this.dataView.getInt32(160, true),
			this.dataView.getInt32(168, true),
			this.dataView.getInt32(176, true),
			this.dataView.getInt32(184, true)
		]
	}
}