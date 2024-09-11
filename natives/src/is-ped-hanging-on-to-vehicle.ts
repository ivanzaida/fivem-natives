import { PedIndex } from '@ivanzaida/structures'

/**
 * PED:IS_PED_HANGING_ON_TO_VEHICLE
 *
 * 0xC3174723CF144560

 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @returns {boolean}  
 */
export function isPedHangingOnToVehicle(ped: PedIndex): boolean {
	const isPedHangingOnToVehicle_result = Citizen.invokeNative<boolean>('0xC3174723CF144560', ped);
	return isPedHangingOnToVehicle_result;
}