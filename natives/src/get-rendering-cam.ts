import { CameraIndex } from '@ivanzaida/structures'

/**
 * CAM:GET_RENDERING_CAM
 *
 * 0xFCB6553111578B2F

 * 
 * ------------------------------------------------------------------
 * @returns {CameraIndex}  
 */
export function getRenderingCam(): CameraIndex {
	const getRenderingCam_result = Citizen.invokeNative<CameraIndex>('0xFCB6553111578B2F', );
	return getRenderingCam_result;
}