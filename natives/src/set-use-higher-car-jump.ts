import { VehicleIndex } from '@ivanzaida/structures'

/**
 * VEHICLE:SET_USE_HIGHER_CAR_JUMP
 *
 * 0x5191631D395FDE9C

 * 
 * Allows vehicles with the FLAG_JUMPING_CAR flag to jump higher (i.e. Ruiner 2000).
 * 
 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @param {boolean} useHigherJump
 */
export function setUseHigherCarJump(vehicle: VehicleIndex, useHigherJump: boolean): void {
	const setUseHigherCarJump_result = Citizen.invokeNative<void>('0x5191631D395FDE9C', vehicle, useHigherJump);
	return setUseHigherCarJump_result;
}