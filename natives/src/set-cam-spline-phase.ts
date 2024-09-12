import { CameraIndex } from '@ivanzaida/structures'

/**
 * CAM:SET_CAM_SPLINE_PHASE
 *
 * 0x59EFC8EF65356E09

 * 
 * ------------------------------------------------------------------
 * @param {CameraIndex} camera
 * @param {number} phase
 */
export function setCamSplinePhase(camera: CameraIndex, phase: number): void {
	const setCamSplinePhase_result = Citizen.invokeNative<void>('0x59EFC8EF65356E09', camera, phase);
	return setCamSplinePhase_result;
}