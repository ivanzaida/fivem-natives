import { Casinometric } from './casinometric'

export class Roulettemetric {
	public readonly dataView: DataView;

	constructor(dataView: DataView = new DataView(new ArrayBuffer(296))) {
		if (dataView.byteLength !== 296) {
			throw new Error('Invalid buffer size');
		}

		this.dataView = dataView;
	}

	public get casinoMetric(): Casinometric {
		return new Casinometric(new DataView(this.dataView.buffer.slice(0, 168)))
	}

	public get iBetStraight(): boolean {
		return this.dataView.getInt8(168) === 1;
	}

	public get iBetSplit(): boolean {
		return this.dataView.getInt8(176) === 1;
	}

	public get iBetStreet(): boolean {
		return this.dataView.getInt8(184) === 1;
	}

	public get iBetCorner(): boolean {
		return this.dataView.getInt8(192) === 1;
	}

	public get iBetFiveNumber(): boolean {
		return this.dataView.getInt8(200) === 1;
	}

	public get iBetSixLine(): boolean {
		return this.dataView.getInt8(208) === 1;
	}

	public get oBetRed(): boolean {
		return this.dataView.getInt8(216) === 1;
	}

	public get oBetBlack(): boolean {
		return this.dataView.getInt8(224) === 1;
	}

	public get oBetOddNumber(): boolean {
		return this.dataView.getInt8(232) === 1;
	}

	public get oBetEvenNumber(): boolean {
		return this.dataView.getInt8(240) === 1;
	}

	public get oBetLowBracket(): boolean {
		return this.dataView.getInt8(248) === 1;
	}

	public get oBetHighBracket(): boolean {
		return this.dataView.getInt8(256) === 1;
	}

	public get oBetDozen(): boolean {
		return this.dataView.getInt8(264) === 1;
	}

	public get oBetColumn(): boolean {
		return this.dataView.getInt8(272) === 1;
	}

	public get winningNumber(): number {
		return this.dataView.getInt32(280, true)
	}

	public get winningColour(): number {
		return this.dataView.getInt32(288, true)
	}
}