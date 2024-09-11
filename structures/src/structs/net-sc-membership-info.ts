export class NetScMembershipInfo {
	public readonly dataView: DataView;

	constructor(dataView: DataView = new DataView(new ArrayBuffer(24))) {
		if (dataView.byteLength !== 24) {
			throw new Error('Invalid buffer size');
		}

		this.dataView = dataView;
	}

	public get hasMembership(): boolean {
		return this.dataView.getInt8(0) === 1;
	}

	public get membershipStartPosix(): number {
		return this.dataView.getInt32(8, true)
	}

	public get membershipEndPosix(): number {
		return this.dataView.getInt32(16, true)
	}
}