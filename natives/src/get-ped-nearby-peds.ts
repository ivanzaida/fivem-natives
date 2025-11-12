import { PedIndex, EPedType } from '@ivanzaida/structures'

/**
 * PED:GET_PED_NEARBY_PEDS
 *
 * 0xAA3F0A9E20917995

 * 
 * sizeAndPeds - is a pointer to an array. The array is filled with peds found nearby the ped supplied to the first argument.
 * ignore - ped type to ignore
 * 
 * Return value is the number of peds found and added to the array passed.
 * 
 * -----------------------------------
 * 
 * To make this work in most menu bases at least in C++ do it like so,
 * 
 *  Formatted Example: https://pastebin.com/D8an9wwp
 * 
 * -----------------------------------
 * 
 * Example: gtaforums.com/topic/789788-function-args-to-pedget-ped-nearby-peds/?p=1067386687
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {PedIndex} array
 * @param {EPedType} exclusionPedType
 * @returns {number}  
 */
export function getPedNearbyPeds(ped: PedIndex, array: PedIndex, exclusionPedType: EPedType | number = 1): number {
	const getPedNearbyPeds_result = Citizen.invokeNative<number>('0xAA3F0A9E20917995', ped, array, exclusionPedType);
	return getPedNearbyPeds_result;
}