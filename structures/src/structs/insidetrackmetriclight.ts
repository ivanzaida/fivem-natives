import { Casinometriclight } from './casinometriclight'

export class Insidetrackmetriclight {
	public readonly dataView: DataView;

	constructor(dataView: DataView = new DataView(new ArrayBuffer(144))) {
		if (dataView.byteLength !== 144) {
			throw new Error('Invalid buffer size');
		}

		this.dataView = dataView;
	}

	public get casinoMetric(): Casinometriclight {
		return new Casinometriclight(new DataView(this.dataView.buffer.slice(0, 128)))
	}

	public get individualGameCount(): number {
		return this.dataView.getInt32(128, true)
	}

	public get mainEventCount(): number {
		return this.dataView.getInt32(136, true)
	}
}