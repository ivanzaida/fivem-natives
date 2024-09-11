/**
 * CFX:SET_MP_GAMER_TAGS_USE_VEHICLE_BEHAVIOR
 *
 * 0X7A27BC93

 * Sets whether all tags should group (normal game behavior) or should remain independent and above each ped's respective head when in a vehicle.
 * 
 * ------------------------------------------------------------------
 * @param {boolean} enabled Whether tags should use normal game behavior. Default is true.
 */
export function setMpGamerTagsUseVehicleBehavior(enabled: boolean): void {
	const setMpGamerTagsUseVehicleBehavior_result = Citizen.invokeNative<void>('0X7A27BC93', enabled);
	return setMpGamerTagsUseVehicleBehavior_result;
}