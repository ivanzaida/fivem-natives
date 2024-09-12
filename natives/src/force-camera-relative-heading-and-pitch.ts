/**
 * CAM:FORCE_CAMERA_RELATIVE_HEADING_AND_PITCH
 *
 * 0xF42836467278195A

 * 
 * ------------------------------------------------------------------
 * @param {number} heading The relative heading to set, in degrees.
 * @param {number} pitch
 * @param {number} pitchSmoothRate
 */
export function forceCameraRelativeHeadingAndPitch(heading: number = 0, pitch: number = 0, pitchSmoothRate: number = 1): void {
	const forceCameraRelativeHeadingAndPitch_result = Citizen.invokeNative<void>('0xF42836467278195A', heading, pitch, pitchSmoothRate);
	return forceCameraRelativeHeadingAndPitch_result;
}