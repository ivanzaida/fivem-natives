import { Vector3 } from '@ivanzaida/structures'
import { Vector3Ref } from '@ivanzaida/structures';

/**
 * FIRE:GET_CLOSEST_FIRE_POS
 *
 * 0xDDF99E38A910C346

 * 
 * Returns TRUE if it found something. FALSE if not.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {Vector3} closestFirePos [Ref]
 * @param {number} testPosX
 * @param {number} testPosY
 * @param {number} testPosZ
 * @returns {boolean}  
 */
export function getClosestFirePos(closestFirePos: Vector3 /* ptr */, testPosX: number, testPosY: number, testPosZ: number): boolean {
	const closestFirePosPtr = new Vector3Ref();
	const getClosestFirePos_result = Citizen.invokeNative<boolean>('0xDDF99E38A910C346', closestFirePosPtr.dataView, testPosX, testPosY, testPosZ);
	closestFirePosPtr.copyToVector(closestFirePos);
	return getClosestFirePos_result;
}