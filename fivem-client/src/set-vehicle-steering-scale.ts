import { VehicleIndex } from '@ivanzaida/structures'

/**
 * CFX:SET_VEHICLE_STEERING_SCALE
 *
 * 0xEB46596F

 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @param {number} scale
 */
export function setVehicleSteeringScale(vehicle: VehicleIndex, scale: number): void {
	const setVehicleSteeringScale_result = Citizen.invokeNative<void>('0xEB46596F', vehicle, scale);
	return setVehicleSteeringScale_result;
}