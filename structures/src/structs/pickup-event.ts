import { PickupIndex } from '../typedefs/pickup-index'
import { PlayerIndex } from '../typedefs/player-index'
import { EPickupType } from '../enums/'
import { ModelNames } from '../typedefs/model-names'

export class PickupEvent {
	public readonly dataView: DataView;

	constructor(dataView: DataView = new DataView(new ArrayBuffer(48))) {
		if (dataView.byteLength !== 48) {
			throw new Error('Invalid buffer size');
		}

		this.dataView = dataView;
	}

	public get pickupIndex(): PickupIndex {
		return this.dataView.getInt32(0, true)
	}

	public get playerIndex(): PlayerIndex {
		return this.dataView.getInt32(8, true)
	}

	public get pickupType(): EPickupType {
		return this.dataView.getInt32(16, true) as EPickupType
	}

	public get pickupAmount(): number {
		return this.dataView.getInt32(24, true)
	}

	public get pickupCustomModel(): ModelNames {
		return this.dataView.getInt32(32, true)
	}

	public get pickupCollected(): number {
		return this.dataView.getInt32(40, true)
	}
}