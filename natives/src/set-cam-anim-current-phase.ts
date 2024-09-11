import { CameraIndex } from '@ivanzaida/structures'

/**
 * CAM:SET_CAM_ANIM_CURRENT_PHASE
 *
 * 0xFEA88ACF99028CEA

 * 
 * ------------------------------------------------------------------
 * @param {CameraIndex} camera
 * @param {number} phase
 */
export function setCamAnimCurrentPhase(camera: CameraIndex, phase: number): void {
	const setCamAnimCurrentPhase_result = Citizen.invokeNative<void>('0xFEA88ACF99028CEA', camera, phase);
	return setCamAnimCurrentPhase_result;
}