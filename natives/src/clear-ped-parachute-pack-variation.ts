import { PedIndex } from '@ivanzaida/structures'

/**
 * PED:CLEAR_PED_PARACHUTE_PACK_VARIATION
 *
 * 0xCDF42A1B8D2576E8

 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 */
export function clearPedParachutePackVariation(ped: PedIndex): void {
	const clearPedParachutePackVariation_result = Citizen.invokeNative<void>('0xCDF42A1B8D2576E8', ped);
	return clearPedParachutePackVariation_result;
}