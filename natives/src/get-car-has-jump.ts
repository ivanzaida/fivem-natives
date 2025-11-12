import { VehicleIndex } from '@ivanzaida/structures'

/**
 * VEHICLE:GET_CAR_HAS_JUMP
 *
 * 0x9D019545E8C959C6

 * 
 * Returns true if the vehicle has the FLAG_JUMPING_CAR flag set.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @returns {boolean}  
 */
export function getCarHasJump(vehicle: VehicleIndex): boolean {
	const getCarHasJump_result = Citizen.invokeNative<boolean>('0x9D019545E8C959C6', vehicle);
	return getCarHasJump_result;
}