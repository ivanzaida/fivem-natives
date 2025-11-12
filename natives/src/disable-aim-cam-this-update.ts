/**
 * CAM:DISABLE_AIM_CAM_THIS_UPDATE
 *
 * 0xDEE33C748704EC49

 * 
 * Note that a third-person aim camera will generally blend back to a follow camera, whereas a first-person aim camera will cut.
 * 
 * 
 * ------------------------------------------------------------------
 */
export function disableAimCamThisUpdate(): void {
	const disableAimCamThisUpdate_result = Citizen.invokeNative<void>('0xDEE33C748704EC49', );
	return disableAimCamThisUpdate_result;
}