import { CameraIndex } from '@ivanzaida/structures'

/**
 * CAM:GET_CAM_ANIM_CURRENT_PHASE
 *
 * 0x2D34ECA1A2A76C38

 * 
 * ------------------------------------------------------------------
 * @param {CameraIndex} camera
 * @returns {number}  
 */
export function getCamAnimCurrentPhase(camera: CameraIndex): number {
	const getCamAnimCurrentPhase_result = Citizen.invokeNative<number>('0x2D34ECA1A2A76C38', camera);
	return getCamAnimCurrentPhase_result;
}