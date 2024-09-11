import { StringRef } from '../types/string-ref';

export class AvailableSaveData {
	public readonly dataView: DataView;

	constructor(dataView: DataView = new DataView(new ArrayBuffer(504))) {
		if (dataView.byteLength !== 504) {
			throw new Error('Invalid buffer size');
		}

		this.dataView = dataView;
	}

	public get totalProgressMadeInSp(): number {
		return this.dataView.getFloat32(0, true)
	}

	public get numberOfChars(): number {
		return this.dataView.getInt32(8, true)
	}

	public get lastchar(): number {
		return this.dataView.getInt32(16, true)
	}

	public get gamerName(): string {
		return new StringRef(new DataView(this.dataView.buffer.slice(24, 63))).value
	}

	public get gamerHandle(): string {
		return new StringRef(new DataView(this.dataView.buffer.slice(88, 63))).value
	}

	public get pvc(): string {
		return new StringRef(new DataView(this.dataView.buffer.slice(152, 63))).value
	}

	public get evc(): string {
		return new StringRef(new DataView(this.dataView.buffer.slice(216, 63))).value
	}

	public get bank(): string {
		return new StringRef(new DataView(this.dataView.buffer.slice(280, 63))).value
	}

	public get wallet(): string[] {
		return [
			new StringRef(new DataView(this.dataView.buffer.slice(344, 63))).value,
			new StringRef(new DataView(this.dataView.buffer.slice(408, 63))).value
		]
	}

	public get xp(): number[] {
		return [
			this.dataView.getInt32(472, true),
			this.dataView.getInt32(480, true)
		]
	}

	public get isactive(): number[] {
		return [
			this.dataView.getInt32(488, true),
			this.dataView.getInt32(496, true)
		]
	}
}