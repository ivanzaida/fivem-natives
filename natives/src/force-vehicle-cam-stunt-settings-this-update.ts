/**
 * CAM:FORCE_VEHICLE_CAM_STUNT_SETTINGS_THIS_UPDATE
 *
 * 0xF66C0552C82638D5

 * 
 * Force a group of settings for the vehicle camera to avoid confusing cameras during certain stunts. Similar to the USE_VEHICLE_CAM_STUNT_SETTINGS_THIS_UPDATE() but is activating the stunt cameras always without trying to detect if a stunt is in place.
 * 
 * 
 * ------------------------------------------------------------------
 */
export function forceVehicleCamStuntSettingsThisUpdate(): void {
	const forceVehicleCamStuntSettingsThisUpdate_result = Citizen.invokeNative<void>('0xF66C0552C82638D5', );
	return forceVehicleCamStuntSettingsThisUpdate_result;
}