/**
 * CAM:SET_GAMEPLAY_CAM_RELATIVE_HEADING
 *
 * 0x64BB72494B9DF6DC

 * 
 * Sets the camera position relative to heading in float from -360 to +360.
 * 
 * Heading is alwyas 0 in aiming camera.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {number} heading
 */
export function setGameplayCamRelativeHeading(heading: number = 0): void {
	const setGameplayCamRelativeHeading_result = Citizen.invokeNative<void>('0x64BB72494B9DF6DC', heading);
	return setGameplayCamRelativeHeading_result;
}