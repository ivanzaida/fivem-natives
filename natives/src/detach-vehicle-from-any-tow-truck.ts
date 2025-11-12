import { VehicleIndex } from '@ivanzaida/structures'

/**
 * VEHICLE:DETACH_VEHICLE_FROM_ANY_TOW_TRUCK
 *
 * 0x1750AA417BEDD270

 * 
 * Detaches specified vehicle from any tow truck it might be attached through, loops through all vehicles so could be expensive
 * 
 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @returns {boolean}  
 */
export function detachVehicleFromAnyTowTruck(vehicle: VehicleIndex): boolean {
	const detachVehicleFromAnyTowTruck_result = Citizen.invokeNative<boolean>('0x1750AA417BEDD270', vehicle);
	return detachVehicleFromAnyTowTruck_result;
}