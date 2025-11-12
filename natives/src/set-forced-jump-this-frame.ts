import { PlayerIndex } from '@ivanzaida/structures'

/**
 * MISC:SET_FORCED_JUMP_THIS_FRAME
 *
 * 0xBD53F503C46AD430

 * 
 * Set the player to be forced into jump state this frame.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PlayerIndex} ped
 */
export function setForcedJumpThisFrame(ped: PlayerIndex): void {
	const setForcedJumpThisFrame_result = Citizen.invokeNative<void>('0xBD53F503C46AD430', ped);
	return setForcedJumpThisFrame_result;
}