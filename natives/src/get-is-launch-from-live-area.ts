/**
 * NETWORK:GET_IS_LAUNCH_FROM_LIVE_AREA
 *
 * 0x8071F22E56E8A70F

 * 
 * This function is hard-coded to always return 0.
 * 
 * 
 * ------------------------------------------------------------------
 * @returns {boolean}  
 */
export function getIsLaunchFromLiveArea(): boolean {
	const getIsLaunchFromLiveArea_result = Citizen.invokeNative<boolean>('0x8071F22E56E8A70F', );
	return getIsLaunchFromLiveArea_result;
}