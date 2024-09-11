/**
 * CAM:FORCE_BONNET_CAMERA_RELATIVE_HEADING_AND_PITCH
 *
 * 0xED7A3604521A9F67

 * 
 * ------------------------------------------------------------------
 * @param {number} heading The relative heading to set, in degrees.
 * @param {number} pitch The relative pitch to set, in degrees.
 */
export function forceBonnetCameraRelativeHeadingAndPitch(heading: number = 0, pitch: number = 0): void {
	const forceBonnetCameraRelativeHeadingAndPitch_result = Citizen.invokeNative<void>('0xED7A3604521A9F67', heading, pitch);
	return forceBonnetCameraRelativeHeadingAndPitch_result;
}