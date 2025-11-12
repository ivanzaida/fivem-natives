import { VehicleIndex } from '@ivanzaida/structures'

/**
 * VEHICLE:SET_VEHICLE_USE_MORE_RESTRICTIVE_SPAWN_CHECKS
 *
 * 0xE296500BDAD8807A

 * 
 * This is used for cases where a car might be driving on the wrong side of the road or avoiding cars
 * at a distance away from the player where other cars might be trying to spawn. It's somewhat expensive
 * so we don't do it for everybody
 * Passing TRUE to this command will do some extra trajectory checks with this vehicle to prevent other vehicles
 * from spawning in its way
 * This is a reset flag and needs to be called each frame
 * 
 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @param {boolean} useRestrictiveCheck
 */
export function setVehicleUseMoreRestrictiveSpawnChecks(vehicle: VehicleIndex, useRestrictiveCheck: boolean): void {
	const setVehicleUseMoreRestrictiveSpawnChecks_result = Citizen.invokeNative<void>('0xE296500BDAD8807A', vehicle, useRestrictiveCheck);
	return setVehicleUseMoreRestrictiveSpawnChecks_result;
}