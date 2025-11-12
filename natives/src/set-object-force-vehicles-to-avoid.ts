import { ObjectIndex } from '@ivanzaida/structures'

/**
 * OBJECT:SET_OBJECT_FORCE_VEHICLES_TO_AVOID
 *
 * 0x6FDDD37A4022A641

 * 
 * Set to TRUE to force vehicles to ignore the height check and avoid this
 * object regardless of how tall it is
 * 
 * Overrides a flag on the object which determines if the object should be avoided by a vehicle in task CTaskVehicleGoToPointWithAvoidanceAutomobile.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {ObjectIndex} objectID
 * @param {boolean} forceAvoid
 */
export function setObjectForceVehiclesToAvoid(objectID: ObjectIndex, forceAvoid: boolean): void {
	const setObjectForceVehiclesToAvoid_result = Citizen.invokeNative<void>('0x6FDDD37A4022A641', objectID, forceAvoid);
	return setObjectForceVehiclesToAvoid_result;
}