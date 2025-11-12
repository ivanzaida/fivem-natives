import { CameraIndex, ECamSplineSmoothingFlags } from '@ivanzaida/structures'

/**
 * CAM:SET_CAM_SPLINE_SMOOTHING_STYLE
 *
 * 0x859FFC7F5DEC29DE

 * 
 * CAM_SPLINE_NO_SMOOTHING		= 0, 	No smoothing just moves at a constant rate
 * CAM_SPLINE_SLOW_IN					= 1, 				Decelerates when approaching a node
 * CAM_SPLINE_SLOW_OUT				=2, 				Accelerates slowly when leaving a node
 * CAM_SPLINE_SLOW_IN_OUT			=3					Decelerates when approaching a node and accelerates slowly when leaving a node
 * 
 * 
 * ------------------------------------------------------------------
 * @param {CameraIndex} camera
 * @param {ECamSplineSmoothingFlags} smoothingStyle
 */
export function setCamSplineSmoothingStyle(camera: CameraIndex, smoothingStyle: ECamSplineSmoothingFlags | number): void {
	const setCamSplineSmoothingStyle_result = Citizen.invokeNative<void>('0x859FFC7F5DEC29DE', camera, smoothingStyle);
	return setCamSplineSmoothingStyle_result;
}