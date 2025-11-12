import { PlayerIndex } from '@ivanzaida/structures'

/**
 * MISC:SET_BEAST_JUMP_THIS_FRAME
 *
 * 0xEA00B3128DDC34A5

 * 
 * Set the player to use beast jump anims this frame.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PlayerIndex} ped
 */
export function setBeastJumpThisFrame(ped: PlayerIndex): void {
	const setBeastJumpThisFrame_result = Citizen.invokeNative<void>('0xEA00B3128DDC34A5', ped);
	return setBeastJumpThisFrame_result;
}