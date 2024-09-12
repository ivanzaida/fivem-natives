import { PedIndex } from '@ivanzaida/structures'

/**
 * PED:IS_PED_GETTING_INTO_A_VEHICLE
 *
 * 0x9D6DF8F3584AAC2B

 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @returns {boolean}  
 */
export function isPedGettingIntoAVehicle(ped: PedIndex): boolean {
	const isPedGettingIntoAVehicle_result = Citizen.invokeNative<boolean>('0x9D6DF8F3584AAC2B', ped);
	return isPedGettingIntoAVehicle_result;
}