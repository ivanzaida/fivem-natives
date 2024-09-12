/**
 * CAM:SET_ALLOW_CUSTOM_VEHICLE_DRIVE_BY_CAM_THIS_UPDATE
 *
 * 0x5EED3D1AFFDEF57E

 * 
 * ------------------------------------------------------------------
 * @param {boolean} state
 */
export function setAllowCustomVehicleDriveByCamThisUpdate(state: boolean): void {
	const setAllowCustomVehicleDriveByCamThisUpdate_result = Citizen.invokeNative<void>('0x5EED3D1AFFDEF57E', state);
	return setAllowCustomVehicleDriveByCamThisUpdate_result;
}