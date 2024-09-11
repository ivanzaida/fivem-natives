import { PedIndex } from '@ivanzaida/structures'

/**
 * PED:IS_PED_IN_ANY_POLICE_VEHICLE
 *
 * 0x84F50401806477CE

 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @returns {boolean}  
 */
export function isPedInAnyPoliceVehicle(ped: PedIndex): boolean {
	const isPedInAnyPoliceVehicle_result = Citizen.invokeNative<boolean>('0x84F50401806477CE', ped);
	return isPedInAnyPoliceVehicle_result;
}