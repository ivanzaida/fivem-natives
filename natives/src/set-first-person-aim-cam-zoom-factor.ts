/**
 * CAM:SET_FIRST_PERSON_AIM_CAM_ZOOM_FACTOR
 *
 * 0xF37AC65898011B1C

 * 
 * Please note that the specified zoom factor will be clamped to between 1.0 and the maximum zoom factor supported by the specific weapon/camera.
 * The zoom factor will also automatically reset to 1.0 if the follow ped's equipped weapon changes or the mobile phone camera toggles on or off.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {number} zoomFactor
 */
export function setFirstPersonAimCamZoomFactor(zoomFactor: number): void {
	const setFirstPersonAimCamZoomFactor_result = Citizen.invokeNative<void>('0xF37AC65898011B1C', zoomFactor);
	return setFirstPersonAimCamZoomFactor_result;
}