import { CameraIndex } from '@ivanzaida/structures'

/**
 * CAM:OVERRIDE_CAM_SPLINE_MOTION_BLUR
 *
 * 0x11BE263E767EF5C3

 * 
 * Nodes must be setup first before this is called. (Note: have to override all nodes in the spline)
 * 
 * Max value for p1 is 15.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {CameraIndex} camera
 * @param {number} entry
 * @param {number} blurStart
 * @param {number} motionBlur
 */
export function overrideCamSplineMotionBlur(camera: CameraIndex, entry: number, blurStart: number, motionBlur: number): void {
	const overrideCamSplineMotionBlur_result = Citizen.invokeNative<void>('0x11BE263E767EF5C3', camera, entry, blurStart, motionBlur);
	return overrideCamSplineMotionBlur_result;
}