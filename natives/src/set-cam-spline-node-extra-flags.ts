import { CameraIndex, ECamSplineNodeForceFlags } from '@ivanzaida/structures'

/**
 * CAM:SET_CAM_SPLINE_NODE_EXTRA_FLAGS
 *
 * 0x9DE997C45267314A

 * 
 * Nodes must be setup first, then the extra flags can be modified.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {CameraIndex} camera
 * @param {number} node
 * @param {ECamSplineNodeForceFlags} flags
 */
export function setCamSplineNodeExtraFlags(camera: CameraIndex, node: number, flags: ECamSplineNodeForceFlags | number): void {
	const setCamSplineNodeExtraFlags_result = Citizen.invokeNative<void>('0x9DE997C45267314A', camera, node, flags);
	return setCamSplineNodeExtraFlags_result;
}