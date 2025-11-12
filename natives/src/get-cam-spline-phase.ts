import { CameraIndex } from '@ivanzaida/structures'

/**
 * CAM:GET_CAM_SPLINE_PHASE
 *
 * 0x37831F682BE7F41E

 * 
 * Can use this with SET_CAM_SPLINE_PHASE to set the float it this native returns.
 * 
 * (returns 1.0f when no nodes has been added, reached end of non existing spline)
 * 
 * 
 * ------------------------------------------------------------------
 * @param {CameraIndex} camera
 * @returns {number}  
 */
export function getCamSplinePhase(camera: CameraIndex): number {
	const getCamSplinePhase_result = Citizen.invokeNative<number>('0x37831F682BE7F41E', camera);
	return getCamSplinePhase_result;
}