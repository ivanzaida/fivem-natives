import { PedIndex } from '@ivanzaida/structures'

/**
 * PED:IS_USING_PED_SCUBA_GEAR_VARIATION
 *
 * 0x1D5385246A3434D3

 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @returns {boolean}  
 */
export function isUsingPedScubaGearVariation(ped: PedIndex): boolean {
	const isUsingPedScubaGearVariation_result = Citizen.invokeNative<boolean>('0x1D5385246A3434D3', ped);
	return isUsingPedScubaGearVariation_result;
}