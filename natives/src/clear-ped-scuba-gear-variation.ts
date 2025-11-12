import { PedIndex } from '@ivanzaida/structures'

/**
 * PED:CLEAR_PED_SCUBA_GEAR_VARIATION
 *
 * 0xB0EFB4958498E2D0

 * 
 * Removes the scubagear (for mp male: component id: 8, drawableId: 123, textureId: any) from peds. Does not play the 'remove scuba gear' animation, but instantly removes it.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 */
export function clearPedScubaGearVariation(ped: PedIndex): void {
	const clearPedScubaGearVariation_result = Citizen.invokeNative<void>('0xB0EFB4958498E2D0', ped);
	return clearPedScubaGearVariation_result;
}