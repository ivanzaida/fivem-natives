import { CameraIndex } from '@ivanzaida/structures'

/**
 * CAM:GET_DEBUG_CAM
 *
 * 0x2BBDA4E1DFD52204

 * 
 * ------------------------------------------------------------------
 * @returns {CameraIndex}  
 */
export function getDebugCam(): CameraIndex {
	const getDebugCam_result = Citizen.invokeNative<CameraIndex>('0x2BBDA4E1DFD52204', );
	return getDebugCam_result;
}