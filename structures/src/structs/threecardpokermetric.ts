import { Casinometric } from './casinometric'

export class Threecardpokermetric {
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

	public get pairPlus(): boolean {
		return this.dataView.getInt8(168) === 1;
	}

	public get outcome(): number {
		return this.dataView.getInt32(176, true)
	}
}