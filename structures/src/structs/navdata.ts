export class Navdata {
	public readonly dataView: DataView;

	constructor(dataView: DataView = new DataView(new ArrayBuffer(24))) {
		if (dataView.byteLength !== 24) {
			throw new Error('Invalid buffer size');
		}

		this.dataView = dataView;
	}

	public get fSlideToCoordHeading(): number {
		return this.dataView.getFloat32(0, true)
	}

	public get fMaxSlopeNavigable(): number {
		return this.dataView.getFloat32(8, true)
	}

	public get fClampMaxSearchDistance(): number {
		return this.dataView.getFloat32(16, true)
	}
}