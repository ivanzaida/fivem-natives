import { PedIndex } from '@ivanzaida/structures'

/**
 * PED:CLEAR_PED_ALTERNATE_WALK_ANIM
 *
 * 0x8B224316C228BF51

 * 
 * Specifies a new walking animation to use when the ped is walking around
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {number} blendDelta A float value specifying how fast the anim should blend back to the normal walk
 */
export function clearPedAlternateWalkAnim(ped: PedIndex, blendDelta: number = 8): void {
	const clearPedAlternateWalkAnim_result = Citizen.invokeNative<void>('0x8B224316C228BF51', ped, blendDelta);
	return clearPedAlternateWalkAnim_result;
}