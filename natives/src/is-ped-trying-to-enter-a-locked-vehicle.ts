import { PedIndex } from '@ivanzaida/structures'

/**
 * PED:IS_PED_TRYING_TO_ENTER_A_LOCKED_VEHICLE
 *
 * 0x74408742BCE2802F

 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @returns {boolean}  
 */
export function isPedTryingToEnterALockedVehicle(ped: PedIndex): boolean {
	const isPedTryingToEnterALockedVehicle_result = Citizen.invokeNative<boolean>('0x74408742BCE2802F', ped);
	return isPedTryingToEnterALockedVehicle_result;
}