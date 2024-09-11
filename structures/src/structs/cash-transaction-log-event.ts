import { EETransactionIds, EETransactionTypes } from '../enums/'
import { GamerHandle } from './gamer-handle'
import { StringRef } from '../types/string-ref';

export class CashTransactionLogEvent {
	public readonly dataView: DataView;

	constructor(dataView: DataView = new DataView(new ArrayBuffer(208))) {
		if (dataView.byteLength !== 208) {
			throw new Error('Invalid buffer size');
		}

		this.dataView = dataView;
	}

	public get transactionId(): number {
		return this.dataView.getInt32(0, true)
	}

	public get iId(): EETransactionIds {
		return this.dataView.getInt32(8, true) as EETransactionIds
	}

	public get iType(): EETransactionTypes {
		return this.dataView.getInt32(16, true) as EETransactionTypes
	}

	public get amount(): number {
		return this.dataView.getInt32(24, true)
	}

	public get itemId(): number {
		return this.dataView.getInt32(32, true)
	}

	public get gamer(): GamerHandle {
		return new GamerHandle(new DataView(this.dataView.buffer.slice(40, 104)))
	}

	public get stringAmount(): string {
		return new StringRef(new DataView(this.dataView.buffer.slice(144, 63))).value
	}
}