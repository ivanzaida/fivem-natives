import { VehicleIndex } from '@ivanzaida/structures'

/**
 * CFX:GET_VEHICLE_STEERING_SCALE
 *
 * 0x954465DE

 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @returns {number}  
 */
export function getVehicleSteeringScale(vehicle: VehicleIndex): number {
	const getVehicleSteeringScale_result = Citizen.invokeNative<number>('0x954465DE', vehicle);
	return getVehicleSteeringScale_result;
}