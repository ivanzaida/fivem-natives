import { VehicleIndex } from '@ivanzaida/structures'

/**
 * CFX:SET_VEHICLE_DIRT_LEVEL
 *
 * 0X2B39128B

 * You can't use values greater than 15.0
 * Also, R does (float)(rand() % 15) to get a random dirt level when generating a vehicle.
 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @param {number} dirtLevel
 */
export function setVehicleDirtLevel(vehicle: VehicleIndex, dirtLevel: number): void {
	const setVehicleDirtLevel_result = Citizen.invokeNative<void>('0X2B39128B', vehicle, dirtLevel);
	return setVehicleDirtLevel_result;
}