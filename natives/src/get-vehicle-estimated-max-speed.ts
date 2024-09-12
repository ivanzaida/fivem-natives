import { VehicleIndex } from '@ivanzaida/structures'

/**
 * VEHICLE:GET_VEHICLE_ESTIMATED_MAX_SPEED
 *
 * 0x66C1D6E6DBF7AC9B

 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @returns {number}  
 */
export function getVehicleEstimatedMaxSpeed(vehicle: VehicleIndex): number {
	const getVehicleEstimatedMaxSpeed_result = Citizen.invokeNative<number>('0x66C1D6E6DBF7AC9B', vehicle);
	return getVehicleEstimatedMaxSpeed_result;
}