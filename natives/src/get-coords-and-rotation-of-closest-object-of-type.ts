import { ModelNames, Vector3, EEulerRotOrder } from '@ivanzaida/structures'
import { Vector3Ref } from '@ivanzaida/structures';

/**
 * OBJECT:GET_COORDS_AND_ROTATION_OF_CLOSEST_OBJECT_OF_TYPE
 *
 * 0x8679173785B8D495

 * 
 * ------------------------------------------------------------------
 * @param {number} sphereCentreX
 * @param {number} sphereCentreY
 * @param {number} sphereCentreZ
 * @param {number} sphereRadius
 * @param {ModelNames} model
 * @param {Vector3} outCoords [Ref]
 * @param {Vector3} outRotation [Ref]
 * @param {EEulerRotOrder} rotOrder
 * @returns {boolean}  
 */
export function getCoordsAndRotationOfClosestObjectOfType(sphereCentreX: number, sphereCentreY: number, sphereCentreZ: number, sphereRadius: number, model: ModelNames, outCoords: Vector3 /* ptr */, outRotation: Vector3 /* ptr */, rotOrder: EEulerRotOrder | number = 2): boolean {
	const outCoordsPtr = new Vector3Ref();
	const outRotationPtr = new Vector3Ref();
	const getCoordsAndRotationOfClosestObjectOfType_result = Citizen.invokeNative<boolean>('0x8679173785B8D495', sphereCentreX, sphereCentreY, sphereCentreZ, sphereRadius, model, outCoordsPtr.dataView, outRotationPtr.dataView, rotOrder);
	outCoordsPtr.copyToVector(outCoords);
	outRotationPtr.copyToVector(outRotation);
	return getCoordsAndRotationOfClosestObjectOfType_result;
}