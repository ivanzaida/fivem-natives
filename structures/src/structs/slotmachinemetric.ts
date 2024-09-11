import { Casinometric } from './casinometric'

export class Slotmachinemetric {
	public readonly dataView: DataView;

	constructor(dataView: DataView = new DataView(new ArrayBuffer(176))) {
		if (dataView.byteLength !== 176) {
			throw new Error('Invalid buffer size');
		}

		this.dataView = dataView;
	}

	public get casinoMetric(): Casinometric {
		return new Casinometric(new DataView(this.dataView.buffer.slice(0, 168)))
	}

	public get machineStyle(): number {
		return this.dataView.getInt32(168, true)
	}
}