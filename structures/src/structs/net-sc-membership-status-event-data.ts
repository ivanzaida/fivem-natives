import { ENetScMembershipEventType } from '../enums/'
import { NetScMembershipInfo } from './net-sc-membership-info'

export class NetScMembershipStatusEventData {
	public readonly dataView: DataView;

	constructor(dataView: DataView = new DataView(new ArrayBuffer(56))) {
		if (dataView.byteLength !== 56) {
			throw new Error('Invalid buffer size');
		}

		this.dataView = dataView;
	}

	public get eventType(): ENetScMembershipEventType {
		return this.dataView.getInt32(0, true) as ENetScMembershipEventType
	}

	public get membershipInfo(): NetScMembershipInfo {
		return new NetScMembershipInfo(new DataView(this.dataView.buffer.slice(8, 24)))
	}

	public get prevInfo(): NetScMembershipInfo {
		return new NetScMembershipInfo(new DataView(this.dataView.buffer.slice(32, 24)))
	}
}