import { VehicleIndex } from '@ivanzaida/structures'

/**
 * VEHICLE:GET_VEHICLE_LIVERY2
 *
 * 0xE423A13CB489E307

 * 
 * Returns index of the current vehicle's secondary livery. A getter for SET_VEHICLE_LIVERY2.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @returns {number}  
 */
export function getVehicleLivery2(vehicle: VehicleIndex): number {
	const getVehicleLivery2_result = Citizen.invokeNative<number>('0xE423A13CB489E307', vehicle);
	return getVehicleLivery2_result;
}