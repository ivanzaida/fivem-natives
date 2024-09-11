export class LeaderboardPredictionRow {
	public readonly dataView: DataView;

	constructor(dataView: DataView = new DataView(new ArrayBuffer(536))) {
		if (dataView.byteLength !== 536) {
			throw new Error('Invalid buffer size');
		}

		this.dataView = dataView;
	}

	public get id(): number {
		return this.dataView.getInt32(0, true)
	}

	public get numColumns(): number {
		return this.dataView.getInt32(8, true)
	}

	public get columnsBitSets(): number {
		return this.dataView.getInt32(16, true)
	}

	public get fColumnData(): number[] {
		return [
			this.dataView.getFloat32(24, true),
			this.dataView.getFloat32(32, true),
			this.dataView.getFloat32(40, true),
			this.dataView.getFloat32(48, true),
			this.dataView.getFloat32(56, true),
			this.dataView.getFloat32(64, true),
			this.dataView.getFloat32(72, true),
			this.dataView.getFloat32(80, true),
			this.dataView.getFloat32(88, true),
			this.dataView.getFloat32(96, true),
			this.dataView.getFloat32(104, true),
			this.dataView.getFloat32(112, true),
			this.dataView.getFloat32(120, true),
			this.dataView.getFloat32(128, true),
			this.dataView.getFloat32(136, true),
			this.dataView.getFloat32(144, true),
			this.dataView.getFloat32(152, true),
			this.dataView.getFloat32(160, true),
			this.dataView.getFloat32(168, true),
			this.dataView.getFloat32(176, true),
			this.dataView.getFloat32(184, true),
			this.dataView.getFloat32(192, true),
			this.dataView.getFloat32(200, true),
			this.dataView.getFloat32(208, true),
			this.dataView.getFloat32(216, true),
			this.dataView.getFloat32(224, true),
			this.dataView.getFloat32(232, true),
			this.dataView.getFloat32(240, true),
			this.dataView.getFloat32(248, true),
			this.dataView.getFloat32(256, true),
			this.dataView.getFloat32(264, true),
			this.dataView.getFloat32(272, true)
		]
	}

	public get columnData(): number[] {
		return [
			this.dataView.getInt32(280, true),
			this.dataView.getInt32(288, true),
			this.dataView.getInt32(296, true),
			this.dataView.getInt32(304, true),
			this.dataView.getInt32(312, true),
			this.dataView.getInt32(320, true),
			this.dataView.getInt32(328, true),
			this.dataView.getInt32(336, true),
			this.dataView.getInt32(344, true),
			this.dataView.getInt32(352, true),
			this.dataView.getInt32(360, true),
			this.dataView.getInt32(368, true),
			this.dataView.getInt32(376, true),
			this.dataView.getInt32(384, true),
			this.dataView.getInt32(392, true),
			this.dataView.getInt32(400, true),
			this.dataView.getInt32(408, true),
			this.dataView.getInt32(416, true),
			this.dataView.getInt32(424, true),
			this.dataView.getInt32(432, true),
			this.dataView.getInt32(440, true),
			this.dataView.getInt32(448, true),
			this.dataView.getInt32(456, true),
			this.dataView.getInt32(464, true),
			this.dataView.getInt32(472, true),
			this.dataView.getInt32(480, true),
			this.dataView.getInt32(488, true),
			this.dataView.getInt32(496, true),
			this.dataView.getInt32(504, true),
			this.dataView.getInt32(512, true),
			this.dataView.getInt32(520, true),
			this.dataView.getInt32(528, true)
		]
	}
}