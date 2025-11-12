import { VehicleIndex } from '@ivanzaida/structures'

/**
 * VEHICLE:ARE_ANY_VEHICLE_SEATS_FREE
 *
 * 0x09C0E5FA1EBC1D84

 * 
 * Returns false if every seat is occupied.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @returns {boolean}  
 */
export function areAnyVehicleSeatsFree(vehicle: VehicleIndex): boolean {
	const areAnyVehicleSeatsFree_result = Citizen.invokeNative<boolean>('0x09C0E5FA1EBC1D84', vehicle);
	return areAnyVehicleSeatsFree_result;
}