import { CameraIndex, ECameraGraphType } from '@ivanzaida/structures'

/**
 * CAM:SET_CAM_ACTIVE_WITH_INTERP
 *
 * 0xB56F35D8A770F80F

 * 
 * Previous declaration void SET_CAM_ACTIVE_WITH_INTERP(Cam camTo, Cam camFrom, int duration, BOOL easeLocation, BOOL easeRotation) is completely wrong. The last two params are integers not BOOLs...
 * 
 * 
 * ------------------------------------------------------------------
 * @param {CameraIndex} destinationCam
 * @param {CameraIndex} originCam
 * @param {number} duration
 * @param {ECameraGraphType} graphTypePos
 * @param {ECameraGraphType} graphTypeRot
 */
export function setCamActiveWithInterp(destinationCam: CameraIndex, originCam: CameraIndex, duration: number, graphTypePos: ECameraGraphType | number = 1, graphTypeRot: ECameraGraphType | number = 1): void {
	const setCamActiveWithInterp_result = Citizen.invokeNative<void>('0xB56F35D8A770F80F', destinationCam, originCam, duration, graphTypePos, graphTypeRot);
	return setCamActiveWithInterp_result;
}