import { VehicleIndex } from '@ivanzaida/structures'

/**
 * CFX:SET_VEHICLE_STEERING_ANGLE
 *
 * 0XFFCCC2EA

 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @param {number} angle
 */
export function setVehicleSteeringAngle(vehicle: VehicleIndex, angle: number): void {
	const setVehicleSteeringAngle_result = Citizen.invokeNative<void>('0XFFCCC2EA', vehicle, angle);
	return setVehicleSteeringAngle_result;
}