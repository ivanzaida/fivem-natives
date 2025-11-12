/**
 * CAM:SET_FIRST_PERSON_AIM_CAM_ZOOM_FACTOR_LIMITS_THIS_UPDATE
 *
 * 0x40C52C6E7C5DE51B

 * 
 * Please note that the specified zoom factor limits will be clamped to between 1.0 and the maximum zoom factor supported by the specific weapon/camera.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {number} minZoomFactor
 * @param {number} maxZoomFactor
 */
export function setFirstPersonAimCamZoomFactorLimitsThisUpdate(minZoomFactor: number, maxZoomFactor: number): void {
	const setFirstPersonAimCamZoomFactorLimitsThisUpdate_result = Citizen.invokeNative<void>('0x40C52C6E7C5DE51B', minZoomFactor, maxZoomFactor);
	return setFirstPersonAimCamZoomFactorLimitsThisUpdate_result;
}