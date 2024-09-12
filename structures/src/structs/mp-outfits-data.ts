export class MpOutfitsData {
	public readonly dataView: DataView;

	constructor(dataView: DataView = new DataView(new ArrayBuffer(360))) {
		if (dataView.byteLength !== 360) {
			throw new Error('Invalid buffer size');
		}

		this.dataView = dataView;
	}

	public get componentDrawableId(): number[] {
		return [
			this.dataView.getInt32(0, true),
			this.dataView.getInt32(8, true),
			this.dataView.getInt32(16, true),
			this.dataView.getInt32(24, true),
			this.dataView.getInt32(32, true),
			this.dataView.getInt32(40, true),
			this.dataView.getInt32(48, true),
			this.dataView.getInt32(56, true),
			this.dataView.getInt32(64, true),
			this.dataView.getInt32(72, true),
			this.dataView.getInt32(80, true),
			this.dataView.getInt32(88, true)
		]
	}

	public get componentTextureId(): number[] {
		return [
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

	public get propDrawableId(): number[] {
		return [
			this.dataView.getInt32(192, true),
			this.dataView.getInt32(200, true),
			this.dataView.getInt32(208, true),
			this.dataView.getInt32(216, true),
			this.dataView.getInt32(224, true),
			this.dataView.getInt32(232, true),
			this.dataView.getInt32(240, true),
			this.dataView.getInt32(248, true),
			this.dataView.getInt32(256, true)
		]
	}

	public get propTextureId(): number[] {
		return [
			this.dataView.getInt32(264, true),
			this.dataView.getInt32(272, true),
			this.dataView.getInt32(280, true),
			this.dataView.getInt32(288, true),
			this.dataView.getInt32(296, true),
			this.dataView.getInt32(304, true),
			this.dataView.getInt32(312, true),
			this.dataView.getInt32(320, true),
			this.dataView.getInt32(328, true)
		]
	}

	public get dLcTattooOverlay(): number[] {
		return [
			this.dataView.getInt32(336, true),
			this.dataView.getInt32(344, true),
			this.dataView.getInt32(352, true)
		]
	}
}