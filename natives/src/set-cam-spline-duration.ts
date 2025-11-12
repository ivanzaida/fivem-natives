import { CameraIndex } from '@ivanzaida/structures'

/**
 * CAM:SET_CAM_SPLINE_DURATION
 *
 * 0x82C9F945AF12EC9F

 * 
 * I named p1 as timeDuration as it is obvious. I'm assuming tho it is ran in ms(Milliseconds) as usual.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {CameraIndex} camera
 * @param {number} duration
 */
export function setCamSplineDuration(camera: CameraIndex, duration: number): void {
	const setCamSplineDuration_result = Citizen.invokeNative<void>('0x82C9F945AF12EC9F', camera, duration);
	return setCamSplineDuration_result;
}