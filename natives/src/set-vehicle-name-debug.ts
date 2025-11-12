import { VehicleIndex } from '@ivanzaida/structures'

/**
 * VEHICLE:SET_VEHICLE_NAME_DEBUG
 *
 * 0xD1ED03B26BD64F6C

 * 
 * NOTE: Debugging functions are not present in the retail version of the game.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @param {string} debugName
 */
export function setVehicleNameDebug(vehicle: VehicleIndex, debugName: string): void {
	const setVehicleNameDebug_result = Citizen.invokeNative<void>('0xD1ED03B26BD64F6C', vehicle, debugName);
	return setVehicleNameDebug_result;
}