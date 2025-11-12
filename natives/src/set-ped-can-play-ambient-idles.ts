import { PedIndex } from '@ivanzaida/structures'

/**
 * TASK:SET_PED_CAN_PLAY_AMBIENT_IDLES
 *
 * 0x2A89ED7D4265A941

 * 
 * Blocks/Removes ambient idles from playing on a ped. Must be running TASK_AMBIENT_CLIPS. Must be called every frame to keep blocking/removing (flags get reset every frame to ensure this doesn't get left on accidently).
 * bBlockIdleClips: if true, blocks future idle clips from playing. bRemoveIdleClipIfPlaying: if true, will remove any current clip playing (will also block).
 * 
 * Appears only in fm_mission_controller and used only 3 times.
 * 
 * ped was always PLAYER_PED_ID()
 * p1 was always true
 * p2 was always true
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {boolean} blockIdleClips
 * @param {boolean} removeIdleClipIfPlaying
 */
export function setPedCanPlayAmbientIdles(ped: PedIndex, blockIdleClips: boolean = false, removeIdleClipIfPlaying: boolean = false): void {
	const setPedCanPlayAmbientIdles_result = Citizen.invokeNative<void>('0x2A89ED7D4265A941', ped, blockIdleClips, removeIdleClipIfPlaying);
	return setPedCanPlayAmbientIdles_result;
}