import { IntRef } from '@ivanzaida/structures'

/**
 * CFX:GET_WATER_QUAD_BOUNDS
 *
 * 0X42E9A06A

 * 
 * ------------------------------------------------------------------
 * @param {number} waterQuad The water quad index
 * @param {IntRef} minX The minX coordinate [Ref]
 * @param {IntRef} minY The minY coordinate [Ref]
 * @param {IntRef} maxX The maxX coordinate [Ref]
 * @param {IntRef} maxY The maxY coordinate [Ref]
 * @returns {boolean}  Returns true on success. Bounds are undefined on failure
 */
export function getWaterQuadBounds(waterQuad: number, minX: IntRef /* ptr */, minY: IntRef /* ptr */, maxX: IntRef /* ptr */, maxY: IntRef /* ptr */): boolean {
	const getWaterQuadBounds_result = Citizen.invokeNative<boolean>('0X42E9A06A', waterQuad, minX.dataView, minY.dataView, maxX.dataView, maxY.dataView);
	return getWaterQuadBounds_result;
}