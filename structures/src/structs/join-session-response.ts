import { EJoinResponseCode } from '../enums/'

export class JoinSessionResponse {
	public readonly dataView: DataView;

	constructor(dataView: DataView = new DataView(new ArrayBuffer(16))) {
		if (dataView.byteLength !== 16) {
			throw new Error('Invalid buffer size');
		}

		this.dataView = dataView;
	}

	public get wasSuccessful(): boolean {
		return this.dataView.getInt8(0) === 1;
	}

	public get nResponseCode(): EJoinResponseCode {
		return this.dataView.getInt32(8, true) as EJoinResponseCode
	}
}