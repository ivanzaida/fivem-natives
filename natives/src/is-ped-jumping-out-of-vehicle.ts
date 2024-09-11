import { PedIndex } from '@ivanzaida/structures'

/**
 * PED:IS_PED_JUMPING_OUT_OF_VEHICLE
 *
 * 0xE7895DBF72C7F282

 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @returns {boolean}  
 */
export function isPedJumpingOutOfVehicle(ped: PedIndex): boolean {
	const isPedJumpingOutOfVehicle_result = Citizen.invokeNative<boolean>('0xE7895DBF72C7F282', ped);
	return isPedJumpingOutOfVehicle_result;
}