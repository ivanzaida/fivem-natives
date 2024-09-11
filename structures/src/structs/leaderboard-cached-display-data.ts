import { GamerHandle } from './gamer-handle'
import { StringRef } from '../types/string-ref';

export class LeaderboardCachedDisplayData {
	public readonly dataView: DataView;

	constructor(dataView: DataView = new DataView(new ArrayBuffer(896))) {
		if (dataView.byteLength !== 896) {
			throw new Error('Invalid buffer size');
		}

		this.dataView = dataView;
	}

	public get id(): number {
		return this.dataView.getInt32(0, true)
	}

	public get gamerName(): string {
		return new StringRef(new DataView(this.dataView.buffer.slice(8, 63))).value
	}

	public get coDriverName(): string {
		return new StringRef(new DataView(this.dataView.buffer.slice(72, 63))).value
	}

	public get gamerHandle(): GamerHandle {
		return new GamerHandle(new DataView(this.dataView.buffer.slice(136, 104)))
	}

	public get coDriverHandle(): GamerHandle {
		return new GamerHandle(new DataView(this.dataView.buffer.slice(240, 104)))
	}

	public get customVehicle(): boolean {
		return this.dataView.getInt8(344) === 1;
	}

	public get rank(): number {
		return this.dataView.getInt32(352, true)
	}

	public get rowFlags(): number {
		return this.dataView.getInt32(360, true)
	}

	public get numColumns(): number {
		return this.dataView.getInt32(368, true)
	}

	public get columnsBitSets(): number {
		return this.dataView.getInt32(376, true)
	}

	public get fColumnData(): number[] {
		return [
			this.dataView.getFloat32(384, true),
			this.dataView.getFloat32(392, true),
			this.dataView.getFloat32(400, true),
			this.dataView.getFloat32(408, true),
			this.dataView.getFloat32(416, true),
			this.dataView.getFloat32(424, true),
			this.dataView.getFloat32(432, true),
			this.dataView.getFloat32(440, true),
			this.dataView.getFloat32(448, true),
			this.dataView.getFloat32(456, true),
			this.dataView.getFloat32(464, true),
			this.dataView.getFloat32(472, true),
			this.dataView.getFloat32(480, true),
			this.dataView.getFloat32(488, true),
			this.dataView.getFloat32(496, true),
			this.dataView.getFloat32(504, true),
			this.dataView.getFloat32(512, true),
			this.dataView.getFloat32(520, true),
			this.dataView.getFloat32(528, true),
			this.dataView.getFloat32(536, true),
			this.dataView.getFloat32(544, true),
			this.dataView.getFloat32(552, true),
			this.dataView.getFloat32(560, true),
			this.dataView.getFloat32(568, true),
			this.dataView.getFloat32(576, true),
			this.dataView.getFloat32(584, true),
			this.dataView.getFloat32(592, true),
			this.dataView.getFloat32(600, true),
			this.dataView.getFloat32(608, true),
			this.dataView.getFloat32(616, true),
			this.dataView.getFloat32(624, true),
			this.dataView.getFloat32(632, true)
		]
	}

	public get columnData(): number[] {
		return [
			this.dataView.getInt32(640, true),
			this.dataView.getInt32(648, true),
			this.dataView.getInt32(656, true),
			this.dataView.getInt32(664, true),
			this.dataView.getInt32(672, true),
			this.dataView.getInt32(680, true),
			this.dataView.getInt32(688, true),
			this.dataView.getInt32(696, true),
			this.dataView.getInt32(704, true),
			this.dataView.getInt32(712, true),
			this.dataView.getInt32(720, true),
			this.dataView.getInt32(728, true),
			this.dataView.getInt32(736, true),
			this.dataView.getInt32(744, true),
			this.dataView.getInt32(752, true),
			this.dataView.getInt32(760, true),
			this.dataView.getInt32(768, true),
			this.dataView.getInt32(776, true),
			this.dataView.getInt32(784, true),
			this.dataView.getInt32(792, true),
			this.dataView.getInt32(800, true),
			this.dataView.getInt32(808, true),
			this.dataView.getInt32(816, true),
			this.dataView.getInt32(824, true),
			this.dataView.getInt32(832, true),
			this.dataView.getInt32(840, true),
			this.dataView.getInt32(848, true),
			this.dataView.getInt32(856, true),
			this.dataView.getInt32(864, true),
			this.dataView.getInt32(872, true),
			this.dataView.getInt32(880, true),
			this.dataView.getInt32(888, true)
		]
	}
}