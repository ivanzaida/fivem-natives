/**
 * CAM:IS_FIRST_PERSON_AIM_CAM_ACTIVE
 *
 * 0x5EA7A06A1491D450

 * 
 * ------------------------------------------------------------------
 * @returns {boolean}  
 */
export function isFirstPersonAimCamActive(): boolean {
	const isFirstPersonAimCamActive_result = Citizen.invokeNative<boolean>('0x5EA7A06A1491D450', );
	return isFirstPersonAimCamActive_result;
}