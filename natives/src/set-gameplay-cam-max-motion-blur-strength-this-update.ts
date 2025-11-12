/**
 * CAM:SET_GAMEPLAY_CAM_MAX_MOTION_BLUR_STRENGTH_THIS_UPDATE
 *
 * 0xC30B691CAD767629

 * 
 * Sets the script-controlled maximum motion blur strength to be applied within the active gameplay camera this update (only.) Note that this command must be called every update that limiting is required, as this parameter automatically resets for safety.
 * 
 * some camera effect that is (also) used in the drunk-cheat, and turned off (by setting it to 0.0) along with the shaking effects once the drunk cheat is disabled.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {number} maxStrength
 */
export function setGameplayCamMaxMotionBlurStrengthThisUpdate(maxStrength: number): void {
	const setGameplayCamMaxMotionBlurStrengthThisUpdate_result = Citizen.invokeNative<void>('0xC30B691CAD767629', maxStrength);
	return setGameplayCamMaxMotionBlurStrengthThisUpdate_result;
}