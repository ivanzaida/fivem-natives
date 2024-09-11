export class OutfitPropStruct {
	public readonly dataView: DataView;

	constructor(dataView: DataView = new DataView(new ArrayBuffer(24))) {
		if (dataView.byteLength !== 24) {
			throw new Error('Invalid buffer size');
		}

		this.dataView = dataView;
	}

	public get nameHash(): number {
		return this.dataView.getInt32(0, true)
	}

	public get enumValue(): number {
		return this.dataView.getInt32(8, true)
	}

	public get anchorPoint(): number {
		return this.dataView.getInt32(16, true)
	}
}