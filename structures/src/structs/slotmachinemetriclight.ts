import { Casinometriclight } from './casinometriclight'

export class Slotmachinemetriclight {
	public readonly dataView: DataView;

	constructor(dataView: DataView = new DataView(new ArrayBuffer(136))) {
		if (dataView.byteLength !== 136) {
			throw new Error('Invalid buffer size');
		}

		this.dataView = dataView;
	}

	public get casinoMetric(): Casinometriclight {
		return new Casinometriclight(new DataView(this.dataView.buffer.slice(0, 128)))
	}

	public get machineStyle(): number {
		return this.dataView.getInt32(128, true)
	}
}