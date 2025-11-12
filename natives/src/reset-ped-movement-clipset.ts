import { PedIndex } from '@ivanzaida/structures'

/**
 * PED:RESET_PED_MOVEMENT_CLIPSET
 *
 * 0x4A46A67DB6AC487D

 * 
 * Resets the movement clipset to the default for the ped type.
 * The default movement clipset is defined in peds.meta under <MovementClipSet>
 * DON'T FORGET to unstream the clipset if no longer needed
 * 
 * If p1 is 0.0, I believe you are back to normal.
 * If p1 is 1.0, it looks like you can only rotate the ped, not walk.
 * 
 * Using the following code to reset back to normal
 * PED::RESET_PED_MOVEMENT_CLIPSET(PLAYER::PLAYER_PED_ID(), 0.0);
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {number} blendDuration
 */
export function resetPedMovementClipset(ped: PedIndex, blendDuration: number = 0.25): void {
	const resetPedMovementClipset_result = Citizen.invokeNative<void>('0x4A46A67DB6AC487D', ped, blendDuration);
	return resetPedMovementClipset_result;
}