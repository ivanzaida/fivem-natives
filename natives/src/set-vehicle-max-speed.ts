import { VehicleIndex } from '@ivanzaida/structures'

/**
 * VEHICLE:SET_VEHICLE_MAX_SPEED
 *
 * 0x8E9B5F00B41A9F8C

 * 
 * To reset the max speed, set the `speed` value to `0.0` or lower.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @param {number} maxSpeed
 */
export function setVehicleMaxSpeed(vehicle: VehicleIndex, maxSpeed: number): void {
	const setVehicleMaxSpeed_result = Citizen.invokeNative<void>('0x8E9B5F00B41A9F8C', vehicle, maxSpeed);
	return setVehicleMaxSpeed_result;
}