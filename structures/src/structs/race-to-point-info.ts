import { Vector3 } from '../types/vector3'

export class RaceToPointInfo {
	public readonly dataView: DataView;

	constructor(dataView: DataView = new DataView(new ArrayBuffer(80))) {
		if (dataView.byteLength !== 80) {
			throw new Error('Invalid buffer size');
		}

		this.dataView = dataView;
	}

	public get locationHash(): number {
		return this.dataView.getInt32(0, true)
	}

	public get matchId(): number {
		return this.dataView.getInt32(8, true)
	}

	public get numPlayers(): number {
		return this.dataView.getInt32(16, true)
	}

	public get raceWon(): boolean {
		return this.dataView.getInt8(24) === 1;
	}

	public get raceStartPos(): Vector3 {
		return new Vector3(this.dataView.getFloat32(32, true), this.dataView.getFloat32(40, true), this.dataView.getFloat32(48, true))
	}

	public get raceEndPos(): Vector3 {
		return new Vector3(this.dataView.getFloat32(56, true), this.dataView.getFloat32(64, true), this.dataView.getFloat32(72, true))
	}
}