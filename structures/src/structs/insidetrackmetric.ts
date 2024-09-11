import { Casinometric } from './casinometric'

export class Insidetrackmetric {
	public readonly dataView: DataView;

	constructor(dataView: DataView = new DataView(new ArrayBuffer(184))) {
		if (dataView.byteLength !== 184) {
			throw new Error('Invalid buffer size');
		}

		this.dataView = dataView;
	}

	public get casinoMetric(): Casinometric {
		return new Casinometric(new DataView(this.dataView.buffer.slice(0, 168)))
	}

	public get gameChoice(): number {
		return this.dataView.getInt32(168, true)
	}

	public get horseChoice(): number {
		return this.dataView.getInt32(176, true)
	}
}