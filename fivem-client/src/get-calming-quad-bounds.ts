import { IntRef } from '@ivanzaida/structures'

/**
 * CFX:GET_CALMING_QUAD_BOUNDS
 *
 * 0XFF60E63

 * 
 * ------------------------------------------------------------------
 * @param {number} waterQuad The calming quad index
 * @param {IntRef} minX The minX coordinate [Ref]
 * @param {IntRef} minY The minY coordinate [Ref]
 * @param {IntRef} maxX The maxX coordinate [Ref]
 * @param {IntRef} maxY The maxY coordinate [Ref]
 * @returns {boolean}  Returns true on success. Bounds are undefined on failure
 */
export function getCalmingQuadBounds(waterQuad: number, minX: IntRef /* ptr */, minY: IntRef /* ptr */, maxX: IntRef /* ptr */, maxY: IntRef /* ptr */): boolean {
	const getCalmingQuadBounds_result = Citizen.invokeNative<boolean>('0XFF60E63', waterQuad, minX.dataView, minY.dataView, maxX.dataView, maxY.dataView);
	return getCalmingQuadBounds_result;
}