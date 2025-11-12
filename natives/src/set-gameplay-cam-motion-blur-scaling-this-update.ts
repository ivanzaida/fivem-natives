/**
 * CAM:SET_GAMEPLAY_CAM_MOTION_BLUR_SCALING_THIS_UPDATE
 *
 * 0x9B669C0440D2AB57

 * 
 * Sets the script-controlled motion blur scaling to be applied within the active gameplay camera this update (only.) Note that this command must be called every update that scaling is required, as this parameter automatically resets for safety.
 * 
 * some camera effect that is used in the drunk-cheat, and turned off (by setting it to 0.0) along with the shaking effects once the drunk cheat is disabled.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {number} scaling
 */
export function setGameplayCamMotionBlurScalingThisUpdate(scaling: number): void {
	const setGameplayCamMotionBlurScalingThisUpdate_result = Citizen.invokeNative<void>('0x9B669C0440D2AB57', scaling);
	return setGameplayCamMotionBlurScalingThisUpdate_result;
}