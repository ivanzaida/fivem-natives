import { VehicleIndex } from '@ivanzaida/structures'

/**
 * VEHICLE:SET_VEHICLE_DIRT_LEVEL
 *
 * 0x9452FE4900245259

 * 
 * You can't use values greater than 15.0
 * Also, R does (float)(rand() % 15) to get a random dirt level when generating a vehicle.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @param {number} dirtLevel
 */
export function setVehicleDirtLevel(vehicle: VehicleIndex, dirtLevel: number): void {
	const setVehicleDirtLevel_result = Citizen.invokeNative<void>('0x9452FE4900245259', vehicle, dirtLevel);
	return setVehicleDirtLevel_result;
}