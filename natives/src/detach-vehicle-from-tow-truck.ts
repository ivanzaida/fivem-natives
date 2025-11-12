import { VehicleIndex } from '@ivanzaida/structures'

/**
 * VEHICLE:DETACH_VEHICLE_FROM_TOW_TRUCK
 *
 * 0xD4BC322888F79B7E

 * 
 * Detach a vehicle to from a towtruck
 * 
 * First two parameters swapped. Scripts verify that towTruck is the first parameter, not the second.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} towTruckVehicle
 * @param {VehicleIndex} vehicle
 */
export function detachVehicleFromTowTruck(towTruckVehicle: VehicleIndex, vehicle: VehicleIndex): void {
	const detachVehicleFromTowTruck_result = Citizen.invokeNative<void>('0xD4BC322888F79B7E', towTruckVehicle, vehicle);
	return detachVehicleFromTowTruck_result;
}