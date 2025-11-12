import { VehicleIndex } from '@ivanzaida/structures'

/**
 * VEHICLE:IS_VEHICLE_ATTACHED_TO_TOW_TRUCK
 *
 * 0x4A64AADF9B40D2AF

 * 
 * Check if a vehicle is attached to the tow truck
 * 
 * Scripts verify that towTruck is the first parameter, not the second.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} towTruckVehicle
 * @param {VehicleIndex} vehicle
 * @returns {boolean}  
 */
export function isVehicleAttachedToTowTruck(towTruckVehicle: VehicleIndex, vehicle: VehicleIndex): boolean {
	const isVehicleAttachedToTowTruck_result = Citizen.invokeNative<boolean>('0x4A64AADF9B40D2AF', towTruckVehicle, vehicle);
	return isVehicleAttachedToTowTruck_result;
}