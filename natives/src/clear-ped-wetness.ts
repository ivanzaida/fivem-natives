import { PedIndex } from '@ivanzaida/structures'

/**
 * PED:CLEAR_PED_WETNESS
 *
 * 0x5EF96FB2D3902DC7

 * 
 * It clears the wetness of the selected Ped/Player. Clothes have to be wet to notice the difference.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 */
export function clearPedWetness(ped: PedIndex): void {
	const clearPedWetness_result = Citizen.invokeNative<void>('0x5EF96FB2D3902DC7', ped);
	return clearPedWetness_result;
}