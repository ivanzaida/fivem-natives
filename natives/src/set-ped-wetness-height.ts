import { PedIndex } from '@ivanzaida/structures'

/**
 * PED:SET_PED_WETNESS_HEIGHT
 *
 * 0x545222B91BFCB344

 * 
 * It adds the wetness level to the player clothing/outfit. As if player just got out from water surface.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {number} height
 */
export function setPedWetnessHeight(ped: PedIndex, height: number): void {
	const setPedWetnessHeight_result = Citizen.invokeNative<void>('0x545222B91BFCB344', ped, height);
	return setPedWetnessHeight_result;
}