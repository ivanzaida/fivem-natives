/**
 * VEHICLE:SET_VEHICLE_COMBAT_MODE
 *
 * 0xBE2B7EEE635434FF

 * 
 * Does nothing. It's a nullsub.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {boolean} inVehicleCombatMode
 */
export function setVehicleCombatMode(inVehicleCombatMode: boolean): void {
	const setVehicleCombatMode_result = Citizen.invokeNative<void>('0xBE2B7EEE635434FF', inVehicleCombatMode);
	return setVehicleCombatMode_result;
}