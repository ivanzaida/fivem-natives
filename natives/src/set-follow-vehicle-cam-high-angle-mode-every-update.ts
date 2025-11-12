/**
 * CAM:SET_FOLLOW_VEHICLE_CAM_HIGH_ANGLE_MODE_EVERY_UPDATE
 *
 * 0x2C57A63E92CDBDF1

 * 
 * Set to false before the script terminates else this will be on permenantly.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {boolean} shouldOverride
 * @param {boolean} mode
 */
export function setFollowVehicleCamHighAngleModeEveryUpdate(shouldOverride: boolean, mode: boolean): void {
	const setFollowVehicleCamHighAngleModeEveryUpdate_result = Citizen.invokeNative<void>('0x2C57A63E92CDBDF1', shouldOverride, mode);
	return setFollowVehicleCamHighAngleModeEveryUpdate_result;
}