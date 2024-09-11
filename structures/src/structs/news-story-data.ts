import { StringRef } from '../types/string-ref';

export class NewsStoryData {
	public readonly dataView: DataView;

	constructor(dataView: DataView = new DataView(new ArrayBuffer(384))) {
		if (dataView.byteLength !== 384) {
			throw new Error('Invalid buffer size');
		}

		this.dataView = dataView;
	}

	public get title(): string {
		return new StringRef(new DataView(this.dataView.buffer.slice(0, 63))).value
	}

	public get subtitle(): string {
		return new StringRef(new DataView(this.dataView.buffer.slice(64, 63))).value
	}

	public get content(): string {
		return new StringRef(new DataView(this.dataView.buffer.slice(128, 63))).value
	}

	public get url(): string {
		return new StringRef(new DataView(this.dataView.buffer.slice(192, 63))).value
	}

	public get headline(): string {
		return new StringRef(new DataView(this.dataView.buffer.slice(256, 63))).value
	}

	public get textureName(): string {
		return new StringRef(new DataView(this.dataView.buffer.slice(320, 63))).value
	}
}