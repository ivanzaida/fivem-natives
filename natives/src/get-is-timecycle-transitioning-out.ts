/**
 * GRAPHICS:GET_IS_TIMECYCLE_TRANSITIONING_OUT
 *
 * 0x382F60C368A6D416

 * 
 * ------------------------------------------------------------------
 * @returns {boolean}  
 */
export function getIsTimecycleTransitioningOut(): boolean {
	const getIsTimecycleTransitioningOut_result = Citizen.invokeNative<boolean>('0x382F60C368A6D416', );
	return getIsTimecycleTransitioningOut_result;
}