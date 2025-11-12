/**
 * VEHICLE:SET_VEHICLE_DETONATION_MODE
 *
 * 0xC9544020DFE34A9C

 * 
 * Does nothing. It's a nullsub.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {boolean} inVehicleCombatMode
 */
export function setVehicleDetonationMode(inVehicleCombatMode: boolean): void {
	const setVehicleDetonationMode_result = Citizen.invokeNative<void>('0xC9544020DFE34A9C', inVehicleCombatMode);
	return setVehicleDetonationMode_result;
}