import { EntityIndex } from '../typedefs/entity-index'

export class EntityId {
	public readonly dataView: DataView;

	constructor(dataView: DataView = new DataView(new ArrayBuffer(8))) {
		if (dataView.byteLength !== 8) {
			throw new Error('Invalid buffer size');
		}

		this.dataView = dataView;
	}

	public get entityId(): EntityIndex {
		return this.dataView.getInt32(0, true)
	}
}