/**
 * CAM:IS_FOLLOW_VEHICLE_CAM_ACTIVE
 *
 * 0x77CDF75A783A0B04

 * 
 * ------------------------------------------------------------------
 * @returns {boolean}  
 */
export function isFollowVehicleCamActive(): boolean {
	const isFollowVehicleCamActive_result = Citizen.invokeNative<boolean>('0x77CDF75A783A0B04', );
	return isFollowVehicleCamActive_result;
}