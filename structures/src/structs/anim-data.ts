import { EAnimationPlaybackType, EAnimationFlags, EIkControlFlags } from '../enums/'
import { StringRef } from '../types/string-ref';

export class AnimData {
	public readonly dataView: DataView;

	constructor(dataView: DataView = new DataView(new ArrayBuffer(512))) {
		if (dataView.byteLength !== 512) {
			throw new Error('Invalid buffer size');
		}

		this.dataView = dataView;
	}

	public get type(): EAnimationPlaybackType {
		return this.dataView.getInt32(0, true) as EAnimationPlaybackType
	}

	public get dictionary0(): string {
		return new StringRef(new DataView(this.dataView.buffer.slice(8, 63))).value
	}

	public get anim0(): string {
		return new StringRef(new DataView(this.dataView.buffer.slice(72, 63))).value
	}

	public get phase0(): number {
		return this.dataView.getFloat32(136, true)
	}

	public get rate0(): number {
		return this.dataView.getFloat32(144, true)
	}

	public get weight0(): number {
		return this.dataView.getFloat32(152, true)
	}

	public get dictionary1(): string {
		return new StringRef(new DataView(this.dataView.buffer.slice(160, 63))).value
	}

	public get anim1(): string {
		return new StringRef(new DataView(this.dataView.buffer.slice(224, 63))).value
	}

	public get phase1(): number {
		return this.dataView.getFloat32(288, true)
	}

	public get rate1(): number {
		return this.dataView.getFloat32(296, true)
	}

	public get weight1(): number {
		return this.dataView.getFloat32(304, true)
	}

	public get dictionary2(): string {
		return new StringRef(new DataView(this.dataView.buffer.slice(312, 63))).value
	}

	public get anim2(): string {
		return new StringRef(new DataView(this.dataView.buffer.slice(376, 63))).value
	}

	public get phase2(): number {
		return this.dataView.getFloat32(440, true)
	}

	public get rate2(): number {
		return this.dataView.getFloat32(448, true)
	}

	public get weight2(): number {
		return this.dataView.getFloat32(456, true)
	}

	public get filter(): number {
		return this.dataView.getInt32(464, true)
	}

	public get blendInDelta(): number {
		return this.dataView.getFloat32(472, true)
	}

	public get blendOutDelta(): number {
		return this.dataView.getFloat32(480, true)
	}

	public get timeToPlay(): number {
		return this.dataView.getInt32(488, true)
	}

	public get flags(): EAnimationFlags {
		return this.dataView.getInt32(496, true) as EAnimationFlags
	}

	public get ikFlags(): EIkControlFlags {
		return this.dataView.getInt32(504, true) as EIkControlFlags
	}
}