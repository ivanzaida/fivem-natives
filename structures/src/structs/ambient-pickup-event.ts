import { EPickupType } from '../enums/'
import { PlayerIndex } from '../typedefs/player-index'
import { ModelNames } from '../typedefs/model-names'

export class AmbientPickupEvent {
	public readonly dataView: DataView;

	constructor(dataView: DataView = new DataView(new ArrayBuffer(64))) {
		if (dataView.byteLength !== 64) {
			throw new Error('Invalid buffer size');
		}

		this.dataView = dataView;
	}

	public get pickupType(): EPickupType {
		return this.dataView.getInt32(0, true) as EPickupType
	}

	public get pickupAmount(): number {
		return this.dataView.getInt32(8, true)
	}

	public get playerIndex(): PlayerIndex {
		return this.dataView.getInt32(16, true)
	}

	public get pickupModel(): ModelNames {
		return this.dataView.getInt32(24, true)
	}

	public get playerGift(): boolean {
		return this.dataView.getInt8(32) === 1;
	}

	public get droppedByPed(): boolean {
		return this.dataView.getInt8(40) === 1;
	}

	public get pickupCollected(): number {
		return this.dataView.getInt32(48, true)
	}

	public get pickupIndex(): number {
		return this.dataView.getInt32(56, true)
	}
}