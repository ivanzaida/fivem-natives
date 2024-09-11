import { ECrimeType } from '../enums/'

export class CrimeReported {
	public readonly dataView: DataView;

	constructor(dataView: DataView = new DataView(new ArrayBuffer(16))) {
		if (dataView.byteLength !== 16) {
			throw new Error('Invalid buffer size');
		}

		this.dataView = dataView;
	}

	public get changedWantedLevel(): boolean {
		return this.dataView.getInt8(0) === 1;
	}

	public get crimeType(): ECrimeType {
		return this.dataView.getInt32(8, true) as ECrimeType
	}
}