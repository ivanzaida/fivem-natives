import { VehicleIndex } from '@ivanzaida/structures'

/**
 * CFX:GET_VEHICLE_STEERING_ANGLE
 *
 * 0x1382FCEA

 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @returns {number}  
 */
export function getVehicleSteeringAngle(vehicle: VehicleIndex): number {
	const getVehicleSteeringAngle_result = Citizen.invokeNative<number>('0x1382FCEA', vehicle);
	return getVehicleSteeringAngle_result;
}