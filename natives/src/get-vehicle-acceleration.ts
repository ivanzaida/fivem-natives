import { VehicleIndex } from '@ivanzaida/structures'

/**
 * VEHICLE:GET_VEHICLE_ACCELERATION
 *
 * 0x7FAB20829167D06E

 * 
 * static - max acceleration
 * 
 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @returns {number}  
 */
export function getVehicleAcceleration(vehicle: VehicleIndex): number {
	const getVehicleAcceleration_result = Citizen.invokeNative<number>('0x7FAB20829167D06E', vehicle);
	return getVehicleAcceleration_result;
}