import { VehicleIndex } from '@ivanzaida/structures'

/**
 * VEHICLE:GET_VEHICLE_LIVERY2_COUNT
 *
 * 0xCB19A1CF94809167

 * 
 * Returns a number of available secondary liveries, or -1 if vehicle has no secondary liveries available.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @returns {number}  
 */
export function getVehicleLivery2Count(vehicle: VehicleIndex): number {
	const getVehicleLivery2Count_result = Citizen.invokeNative<number>('0xCB19A1CF94809167', vehicle);
	return getVehicleLivery2Count_result;
}