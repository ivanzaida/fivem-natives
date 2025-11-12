import { VehicleIndex } from '@ivanzaida/structures'

/**
 * CFX:SET_VEHICLE_DIRT_LEVEL
 *
 * 0x2B39128B

 * 
 * You can't use values greater than 15.0
 * Also, R does (float)(rand() % 15) to get a random dirt level when generating a vehicle.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle The vehicle to set.
 * @param {number} dirtLevel A number between 0.0 and 15.0 representing the vehicles dirt level.
 */
export function setVehicleDirtLevel(vehicle: VehicleIndex, dirtLevel: number): void {
	const setVehicleDirtLevel_result = Citizen.invokeNative<void>('0x2B39128B', vehicle, dirtLevel);
	return setVehicleDirtLevel_result;
}