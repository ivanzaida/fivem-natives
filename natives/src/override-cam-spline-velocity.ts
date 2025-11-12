import { CameraIndex } from '@ivanzaida/structures'

/**
 * CAM:OVERRIDE_CAM_SPLINE_VELOCITY
 *
 * 0x59CBB7FD3D159D45

 * 
 * Nodes must be setup first before this is called. (Note: have to override all nodes in the spline)
 * 
 * 
 * ------------------------------------------------------------------
 * @param {CameraIndex} camera
 * @param {number} entry
 * @param {number} startPoint
 * @param {number} speed
 */
export function overrideCamSplineVelocity(camera: CameraIndex, entry: number, startPoint: number, speed: number): void {
	const overrideCamSplineVelocity_result = Citizen.invokeNative<void>('0x59CBB7FD3D159D45', camera, entry, startPoint, speed);
	return overrideCamSplineVelocity_result;
}