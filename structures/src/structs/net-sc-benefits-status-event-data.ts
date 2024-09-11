import { ENetScBenefitsEventType } from '../enums/'

export class NetScBenefitsStatusEventData {
	public readonly dataView: DataView;

	constructor(dataView: DataView = new DataView(new ArrayBuffer(24))) {
		if (dataView.byteLength !== 24) {
			throw new Error('Invalid buffer size');
		}

		this.dataView = dataView;
	}

	public get eventType(): ENetScBenefitsEventType {
		return this.dataView.getInt32(0, true) as ENetScBenefitsEventType
	}

	public get numBenefits(): number {
		return this.dataView.getInt32(8, true)
	}

	public get benefitValue(): number {
		return this.dataView.getInt32(16, true)
	}
}