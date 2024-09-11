/**
 * CAM:SET_FOLLOW_VEHICLE_CAM_SEAT_THIS_UPDATE
 *
 * 0x0A9B49F91B35D536

 * 
 * ------------------------------------------------------------------
 * @param {number} seat
 */
export function setFollowVehicleCamSeatThisUpdate(seat: number): void {
	const setFollowVehicleCamSeatThisUpdate_result = Citizen.invokeNative<void>('0x0A9B49F91B35D536', seat);
	return setFollowVehicleCamSeatThisUpdate_result;
}