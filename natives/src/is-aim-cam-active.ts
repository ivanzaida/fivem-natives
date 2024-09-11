/**
 * CAM:IS_AIM_CAM_ACTIVE
 *
 * 0x196704C916969409

 * 
 * ------------------------------------------------------------------
 * @returns {boolean}  
 */
export function isAimCamActive(): boolean {
	const isAimCamActive_result = Citizen.invokeNative<boolean>('0x196704C916969409', );
	return isAimCamActive_result;
}