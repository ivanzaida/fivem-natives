import { StringRef } from '../types/string-ref';

export class SaveMigrationStatus {
	public readonly dataView: DataView;

	constructor(dataView: DataView = new DataView(new ArrayBuffer(80))) {
		if (dataView.byteLength !== 80) {
			throw new Error('Invalid buffer size');
		}

		this.dataView = dataView;
	}

	public get inProgress(): boolean {
		return this.dataView.getInt8(0) === 1;
	}

	public get state(): string {
		return new StringRef(new DataView(this.dataView.buffer.slice(8, 63))).value
	}

	public get transactionId(): number {
		return this.dataView.getInt32(72, true)
	}
}