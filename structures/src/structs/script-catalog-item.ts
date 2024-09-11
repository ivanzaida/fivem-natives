import { EShopItemCategories, EShopItemStorage } from '../enums/'
import { StringRef } from '../types/string-ref';

export class ScriptCatalogItem {
	public readonly dataView: DataView;

	constructor(dataView: DataView = new DataView(new ArrayBuffer(208))) {
		if (dataView.byteLength !== 208) {
			throw new Error('Invalid buffer size');
		}

		this.dataView = dataView;
	}

	public get key(): string {
		return new StringRef(new DataView(this.dataView.buffer.slice(0, 63))).value
	}

	public get textTag(): string {
		return new StringRef(new DataView(this.dataView.buffer.slice(64, 15))).value
	}

	public get name(): string {
		return new StringRef(new DataView(this.dataView.buffer.slice(80, 63))).value
	}

	public get category(): EShopItemCategories {
		return this.dataView.getInt32(144, true) as EShopItemCategories
	}

	public get price(): number {
		return this.dataView.getInt32(152, true)
	}

	public get stathash(): number {
		return this.dataView.getInt32(160, true)
	}

	public get storagetype(): EShopItemStorage {
		return this.dataView.getInt32(168, true) as EShopItemStorage
	}

	public get bitshift(): number {
		return this.dataView.getInt32(176, true)
	}

	public get bitsize(): number {
		return this.dataView.getInt32(184, true)
	}

	public get statenumvalue(): number {
		return this.dataView.getInt32(192, true)
	}

	public get statvalue(): number {
		return this.dataView.getInt32(200, true)
	}
}