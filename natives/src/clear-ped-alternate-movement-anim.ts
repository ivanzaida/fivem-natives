import { PedIndex, EAlternateAnimType } from '@ivanzaida/structures'

/**
 * PED:CLEAR_PED_ALTERNATE_MOVEMENT_ANIM
 *
 * 0x384E72D362B96929

 * 
 * Specifies a new movement animation to use when the ped is moving around
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {EAlternateAnimType} type
 * @param {number} blendDelta A float value specifying how fast the anim should blend back to the normal walk
 */
export function clearPedAlternateMovementAnim(ped: PedIndex, type: EAlternateAnimType | number, blendDelta: number = 8): void {
	const clearPedAlternateMovementAnim_result = Citizen.invokeNative<void>('0x384E72D362B96929', ped, type, blendDelta);
	return clearPedAlternateMovementAnim_result;
}