import { VehicleIndex } from '@ivanzaida/structures'

/**
 * VEHICLE:GET_VEHICLE_LIVERY_COUNT
 *
 * 0xBA3ECE95D3094B0F

 * 
 * Returns -1 if the vehicle has no livery
 * 
 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @returns {number}  
 */
export function getVehicleLiveryCount(vehicle: VehicleIndex): number {
	const getVehicleLiveryCount_result = Citizen.invokeNative<number>('0xBA3ECE95D3094B0F', vehicle);
	return getVehicleLiveryCount_result;
}