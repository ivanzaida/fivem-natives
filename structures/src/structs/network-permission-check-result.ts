export class NetworkPermissionCheckResult {
	public readonly dataView: DataView;

	constructor(dataView: DataView = new DataView(new ArrayBuffer(16))) {
		if (dataView.byteLength !== 16) {
			throw new Error('Invalid buffer size');
		}

		this.dataView = dataView;
	}

	public get checkId(): number {
		return this.dataView.getInt32(0, true)
	}

	public get isAllowed(): boolean {
		return this.dataView.getInt8(8) === 1;
	}
}