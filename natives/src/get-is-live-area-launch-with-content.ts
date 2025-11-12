/**
 * NETWORK:GET_IS_LIVE_AREA_LAUNCH_WITH_CONTENT
 *
 * 0x144FBCDDF1717161

 * 
 * This function is hard-coded to always return 0.
 * 
 * 
 * ------------------------------------------------------------------
 * @returns {boolean}  
 */
export function getIsLiveAreaLaunchWithContent(): boolean {
	const getIsLiveAreaLaunchWithContent_result = Citizen.invokeNative<boolean>('0x144FBCDDF1717161', );
	return getIsLiveAreaLaunchWithContent_result;
}