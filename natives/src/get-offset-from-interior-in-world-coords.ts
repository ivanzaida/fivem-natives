import { InteriorInstanceIndex, Vector3 } from '@ivanzaida/structures'

/**
 * INTERIOR:GET_OFFSET_FROM_INTERIOR_IN_WORLD_COORDS
 *
 * 0xB849529ACBFB3D85

 * 
 * ------------------------------------------------------------------
 * @param {InteriorInstanceIndex} interiorInstance
 * @param {number} vecOffsetX
 * @param {number} vecOffsetY
 * @param {number} vecOffsetZ
 * @returns {Vector3}  
 */
export function getOffsetFromInteriorInWorldCoords(interiorInstance: InteriorInstanceIndex, vecOffsetX: number, vecOffsetY: number, vecOffsetZ: number): Vector3 {
	const getOffsetFromInteriorInWorldCoords_result = Citizen.invokeNative<Vector3>('0xB849529ACBFB3D85', interiorInstance, vecOffsetX, vecOffsetY, vecOffsetZ);
	return getOffsetFromInteriorInWorldCoords_result;
}