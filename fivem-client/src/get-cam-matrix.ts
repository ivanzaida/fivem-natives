import { CameraIndex, Vector3Ref } from '@ivanzaida/structures'

/**
 * CFX:GET_CAM_MATRIX
 *
 * 0x8F57A89D

 * Returns the world matrix of the specified camera. To turn this into a view matrix, calculate the inverse.
 * 
 * ------------------------------------------------------------------
 * @param {CameraIndex} camera
 * @param {Vector3Ref} rightVector [Ref]
 * @param {Vector3Ref} forwardVector [Ref]
 * @param {Vector3Ref} upVector [Ref]
 * @param {Vector3Ref} position [Ref]
 */
export function getCamMatrix(camera: CameraIndex, rightVector: Vector3Ref /* ptr */, forwardVector: Vector3Ref /* ptr */, upVector: Vector3Ref /* ptr */, position: Vector3Ref /* ptr */): void {
	const getCamMatrix_result = Citizen.invokeNative<void>('0x8F57A89D', camera, rightVector.dataView, forwardVector.dataView, upVector.dataView, position.dataView);
	return getCamMatrix_result;
}