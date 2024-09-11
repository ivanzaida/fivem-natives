import { VehicleIndex } from '@ivanzaida/structures'

/**
 * CFX:GET_VEHICLE_STEERING_SCALE
 *
 * 0X954465DE

 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @returns {number}  
 */
export function getVehicleSteeringScale(vehicle: VehicleIndex): number {
	const getVehicleSteeringScale_result = Citizen.invokeNative<number>('0X954465DE', vehicle);
	return getVehicleSteeringScale_result;
}