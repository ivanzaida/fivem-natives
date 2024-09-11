import { PlayerIndex } from '../typedefs/player-index'
import { EPlayerSource } from '../enums/'
import { Threadid } from '../typedefs/threadid'
import { GamerHandle } from './gamer-handle'
import { StringRef } from '../types/string-ref';

export class PlayerScriptEvents {
	public readonly dataView: DataView;

	constructor(dataView: DataView = new DataView(new ArrayBuffer(376))) {
		if (dataView.byteLength !== 376) {
			throw new Error('Invalid buffer size');
		}

		this.dataView = dataView;
	}

	public get playerName(): string {
		return new StringRef(new DataView(this.dataView.buffer.slice(0, 63))).value
	}

	public get playerIndex(): PlayerIndex {
		return this.dataView.getInt32(64, true)
	}

	public get playerTeam(): number {
		return this.dataView.getInt32(72, true)
	}

	public get nSource(): EPlayerSource {
		return this.dataView.getInt32(80, true) as EPlayerSource
	}

	public get numThreads(): number {
		return this.dataView.getInt32(88, true)
	}

	public get threads(): Threadid[] {
		return [
			this.dataView.getInt32(96, true),
			this.dataView.getInt32(104, true),
			this.dataView.getInt32(112, true),
			this.dataView.getInt32(120, true),
			this.dataView.getInt32(128, true),
			this.dataView.getInt32(136, true),
			this.dataView.getInt32(144, true),
			this.dataView.getInt32(152, true),
			this.dataView.getInt32(160, true),
			this.dataView.getInt32(168, true),
			this.dataView.getInt32(176, true),
			this.dataView.getInt32(184, true),
			this.dataView.getInt32(192, true),
			this.dataView.getInt32(200, true),
			this.dataView.getInt32(208, true),
			this.dataView.getInt32(216, true),
			this.dataView.getInt32(224, true),
			this.dataView.getInt32(232, true),
			this.dataView.getInt32(240, true),
			this.dataView.getInt32(248, true)
		]
	}

	public get player(): GamerHandle {
		return new GamerHandle(new DataView(this.dataView.buffer.slice(256, 104)))
	}

	public get playerFlags(): number {
		return this.dataView.getInt32(360, true)
	}

	public get bailReason(): number {
		return this.dataView.getInt32(368, true)
	}
}