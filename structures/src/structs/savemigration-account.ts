import { StringRef } from '../types/string-ref';

export class SavemigrationAccount {
	public readonly dataView: DataView;

	constructor(dataView: DataView = new DataView(new ArrayBuffer(280))) {
		if (dataView.byteLength !== 280) {
			throw new Error('Invalid buffer size');
		}

		this.dataView = dataView;
	}

	public get accountId(): number {
		return this.dataView.getInt32(0, true)
	}

	public get statusCount(): number {
		return this.dataView.getInt32(8, true)
	}

	public get available(): boolean {
		return this.dataView.getInt8(16) === 1;
	}

	public get platform(): string {
		return new StringRef(new DataView(this.dataView.buffer.slice(24, 63))).value
	}

	public get gamerName(): string {
		return new StringRef(new DataView(this.dataView.buffer.slice(88, 63))).value
	}

	public get gamerHandle(): string {
		return new StringRef(new DataView(this.dataView.buffer.slice(152, 63))).value
	}

	public get errorCode(): string {
		return new StringRef(new DataView(this.dataView.buffer.slice(216, 63))).value
	}
}