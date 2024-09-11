/**
 * CAM:IS_AIM_CAM_ACTIVE_IN_ACCURATE_MODE
 *
 * 0xD7582282E517A590

 * 
 * ------------------------------------------------------------------
 * @returns {boolean}  
 */
export function isAimCamActiveInAccurateMode(): boolean {
	const isAimCamActiveInAccurateMode_result = Citizen.invokeNative<boolean>('0xD7582282E517A590', );
	return isAimCamActiveInAccurateMode_result;
}