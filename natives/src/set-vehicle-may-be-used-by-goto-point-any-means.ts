import { VehicleIndex } from '@ivanzaida/structures'

/**
 * VEHICLE:SET_VEHICLE_MAY_BE_USED_BY_GOTO_POINT_ANY_MEANS
 *
 * 0x9D756F14B232B644

 * 
 * Normally peds tasked with GOTO_POINT_ANY_MEANS will only be able to commandeer vehicles from the ambient population.
 * Settting TRUE via this command will allow peds to use specified mission vehicles also.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @param {boolean} state
 */
export function setVehicleMayBeUsedByGotoPointAnyMeans(vehicle: VehicleIndex, state: boolean): void {
	const setVehicleMayBeUsedByGotoPointAnyMeans_result = Citizen.invokeNative<void>('0x9D756F14B232B644', vehicle, state);
	return setVehicleMayBeUsedByGotoPointAnyMeans_result;
}