import { StringRef } from '../types/string-ref';

export class MoveInitialParameters {
	public readonly dataView: DataView;

	constructor(dataView: DataView = new DataView(new ArrayBuffer(336))) {
		if (dataView.byteLength !== 336) {
			throw new Error('Invalid buffer size');
		}

		this.dataView = dataView;
	}

	public get clipSetHash0(): number {
		return this.dataView.getInt32(0, true)
	}

	public get clipSetVariableHash0(): number {
		return this.dataView.getInt32(8, true)
	}

	public get clipSetHash1(): number {
		return this.dataView.getInt32(16, true)
	}

	public get clipSetVariableHash1(): number {
		return this.dataView.getInt32(24, true)
	}

	public get floatParamName0(): string {
		return new StringRef(new DataView(this.dataView.buffer.slice(32, 63))).value
	}

	public get floatParamValue0(): number {
		return this.dataView.getFloat32(96, true)
	}

	public get floatParamLerpValue0(): number {
		return this.dataView.getFloat32(104, true)
	}

	public get floatParamName1(): string {
		return new StringRef(new DataView(this.dataView.buffer.slice(112, 63))).value
	}

	public get floatParamValue1(): number {
		return this.dataView.getFloat32(176, true)
	}

	public get floatParamLerpValue1(): number {
		return this.dataView.getFloat32(184, true)
	}

	public get boolParamName0(): string {
		return new StringRef(new DataView(this.dataView.buffer.slice(192, 63))).value
	}

	public get boolParamValue0(): boolean {
		return this.dataView.getInt8(256) === 1;
	}

	public get boolParamName1(): string {
		return new StringRef(new DataView(this.dataView.buffer.slice(264, 63))).value
	}

	public get boolParamValue1(): boolean {
		return this.dataView.getInt8(328) === 1;
	}
}