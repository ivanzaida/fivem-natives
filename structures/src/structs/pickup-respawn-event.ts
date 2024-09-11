import { PickupIndex } from '../typedefs/pickup-index'
import { EPickupType } from '../enums/'
import { ModelNames } from '../typedefs/model-names'

export class PickupRespawnEvent {
	public readonly dataView: DataView;

	constructor(dataView: DataView = new DataView(new ArrayBuffer(24))) {
		if (dataView.byteLength !== 24) {
			throw new Error('Invalid buffer size');
		}

		this.dataView = dataView;
	}

	public get pickupIndex(): PickupIndex {
		return this.dataView.getInt32(0, true)
	}

	public get pickupType(): EPickupType {
		return this.dataView.getInt32(8, true) as EPickupType
	}

	public get pickupModel(): ModelNames {
		return this.dataView.getInt32(16, true)
	}
}