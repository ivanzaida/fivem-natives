/**
 * CFX:SET_REACTION_TO_VEHICLE_SIREN_DISABLED
 *
 * 0x8C3EC64F

 * This completely disables pedestrian vehicles from reacting to sirens. They will not try to do any maneuver to evade.
 * 
 * ------------------------------------------------------------------
 * @param {boolean} state Toggle on or off.
 */
export function setReactionToVehicleSirenDisabled(state: boolean): void {
	const setReactionToVehicleSirenDisabled_result = Citizen.invokeNative<void>('0x8C3EC64F', state);
	return setReactionToVehicleSirenDisabled_result;
}