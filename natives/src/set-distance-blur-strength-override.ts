/**
 * GRAPHICS:SET_DISTANCE_BLUR_STRENGTH_OVERRIDE
 *
 * 0x8AFA674B4DE9BCAE

 * 
 * ------------------------------------------------------------------
 * @param {number} param
 */
export function setDistanceBlurStrengthOverride(param: number): void {
	const setDistanceBlurStrengthOverride_result = Citizen.invokeNative<void>('0x8AFA674B4DE9BCAE', param);
	return setDistanceBlurStrengthOverride_result;
}