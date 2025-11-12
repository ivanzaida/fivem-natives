import { FloatRef, Vector3 } from '@ivanzaida/structures'
import { Vector3Ref } from '@ivanzaida/structures';

/**
 * MISC:GET_GROUND_Z_AND_NORMAL_FOR_3D_COORD
 *
 * 0x1C23EBEE3AABD4C7

 * 
 * The command will return TRUE if it finds collision, FALSE if not.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {number} coorsX
 * @param {number} coorsY
 * @param {number} coorsZ
 * @param {FloatRef} outZ [Ref]
 * @param {Vector3} outNormal [Ref]
 * @returns {boolean}  
 */
export function getGroundZAndNormalFor_3DCoord(coorsX: number, coorsY: number, coorsZ: number, outZ: FloatRef /* ptr */, outNormal: Vector3 /* ptr */): boolean {
	const outNormalPtr = new Vector3Ref();
	const getGroundZAndNormalFor_3DCoord_result = Citizen.invokeNative<boolean>('0x1C23EBEE3AABD4C7', coorsX, coorsY, coorsZ, outZ.dataView, outNormalPtr.dataView);
	outNormalPtr.copyToVector(outNormal);
	return getGroundZAndNormalFor_3DCoord_result;
}