import { PedIndex } from '@ivanzaida/structures'

/**
 * PED:IS_PED_SWIMMING_UNDER_WATER
 *
 * 0x9AC89B274C35B3FC

 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @returns {boolean}  
 */
export function isPedSwimmingUnderWater(ped: PedIndex): boolean {
	const isPedSwimmingUnderWater_result = Citizen.invokeNative<boolean>('0x9AC89B274C35B3FC', ped);
	return isPedSwimmingUnderWater_result;
}