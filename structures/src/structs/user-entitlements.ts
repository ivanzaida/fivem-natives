import { EUserEntitlementStatus } from '../enums/'

export class UserEntitlements {
	public readonly dataView: DataView;

	constructor(dataView: DataView = new DataView(new ArrayBuffer(8))) {
		if (dataView.byteLength !== 8) {
			throw new Error('Invalid buffer size');
		}

		this.dataView = dataView;
	}

	public get storyMode(): EUserEntitlementStatus {
		return this.dataView.getInt32(0, true) as EUserEntitlementStatus
	}
}