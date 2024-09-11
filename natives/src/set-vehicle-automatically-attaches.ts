import { EntityIndex } from '@ivanzaida/structures'

/**
 * VEHICLE:SET_VEHICLE_AUTOMATICALLY_ATTACHES
 *
 * 0xDD38B2935A3EAC56

 * 
 * ------------------------------------------------------------------
 * @param {EntityIndex} towTruckVehicle
 * @param {boolean} automaticallyAttach
 * @param {boolean} scanWithNonPlayerDriver When set to true on a truck will scan for trailers even without a player driver
 * @returns {EntityIndex}  
 */
export function setVehicleAutomaticallyAttaches(towTruckVehicle: EntityIndex, automaticallyAttach: boolean, scanWithNonPlayerDriver: boolean = false): EntityIndex {
	const setVehicleAutomaticallyAttaches_result = Citizen.invokeNative<EntityIndex>('0xDD38B2935A3EAC56', towTruckVehicle, automaticallyAttach, scanWithNonPlayerDriver);
	return setVehicleAutomaticallyAttaches_result;
}