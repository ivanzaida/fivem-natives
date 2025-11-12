import { PlayerIndex } from '@ivanzaida/structures'

/**
 * MISC:SET_SUPER_JUMP_THIS_FRAME
 *
 * 0x353BF8D85390AA39

 * 
 * Set the player to super jump this frame
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PlayerIndex} ped
 */
export function setSuperJumpThisFrame(ped: PlayerIndex): void {
	const setSuperJumpThisFrame_result = Citizen.invokeNative<void>('0x353BF8D85390AA39', ped);
	return setSuperJumpThisFrame_result;
}