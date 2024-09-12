import { VehicleIndex } from '@ivanzaida/structures'

/**
 * CFX:SET_VEHICLE_GRAVITY_AMOUNT
 *
 * 0x1A963E58

 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @param {number} gravity
 */
export function setVehicleGravityAmount(vehicle: VehicleIndex, gravity: number): void {
	const setVehicleGravityAmount_result = Citizen.invokeNative<void>('0x1A963E58', vehicle, gravity);
	return setVehicleGravityAmount_result;
}