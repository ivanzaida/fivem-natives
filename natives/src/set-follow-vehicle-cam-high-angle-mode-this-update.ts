/**
 * CAM:SET_FOLLOW_VEHICLE_CAM_HIGH_ANGLE_MODE_THIS_UPDATE
 *
 * 0x82C5BFD25578F440

 * 
 * ------------------------------------------------------------------
 * @param {boolean} state
 */
export function setFollowVehicleCamHighAngleModeThisUpdate(state: boolean): void {
	const setFollowVehicleCamHighAngleModeThisUpdate_result = Citizen.invokeNative<void>('0x82C5BFD25578F440', state);
	return setFollowVehicleCamHighAngleModeThisUpdate_result;
}