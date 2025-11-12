/**
 * CAM:SET_GAMEPLAY_CAM_RELATIVE_PITCH
 *
 * 0xD815D4BD1AE9E85A

 * 
 * This won't work for vehicles POVs, if you need to change the camera pitch and want the change
 * on vehicle's POVs as well, please use FORCE_CAMERA_RELATIVE_HEADING_AND_PITCH.
 * 
 * This native sets the camera's pitch (rotation on the x-axis).
 * 
 * 
 * ------------------------------------------------------------------
 * @param {number} pitch The relative pitch to set, in degrees.
 * @param {number} smoothRate
 */
export function setGameplayCamRelativePitch(pitch: number = 0, smoothRate: number = 1): void {
	const setGameplayCamRelativePitch_result = Citizen.invokeNative<void>('0xD815D4BD1AE9E85A', pitch, smoothRate);
	return setGameplayCamRelativePitch_result;
}