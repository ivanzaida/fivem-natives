import { Casinometric } from './casinometric'

export class Blackjackmetric {
	public readonly dataView: DataView;

	constructor(dataView: DataView = new DataView(new ArrayBuffer(208))) {
		if (dataView.byteLength !== 208) {
			throw new Error('Invalid buffer size');
		}

		this.dataView = dataView;
	}

	public get casinoMetric(): Casinometric {
		return new Casinometric(new DataView(this.dataView.buffer.slice(0, 168)))
	}

	public get stand(): boolean {
		return this.dataView.getInt8(168) === 1;
	}

	public get hit(): boolean {
		return this.dataView.getInt8(176) === 1;
	}

	public get double(): boolean {
		return this.dataView.getInt8(184) === 1;
	}

	public get split(): boolean {
		return this.dataView.getInt8(192) === 1;
	}

	public get outcome(): number {
		return this.dataView.getInt32(200, true)
	}
}