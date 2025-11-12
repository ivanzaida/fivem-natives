import { EntityIndex, FloatRef } from '@ivanzaida/structures'

/**
 * ENTITY:GET_ENTITY_QUATERNION
 *
 * 0xB66CD98548798F26

 * 
 * w is the correct parameter name!
 * 
 * 
 * ------------------------------------------------------------------
 * @param {EntityIndex} entity
 * @param {FloatRef} outX [Ref]
 * @param {FloatRef} outY [Ref]
 * @param {FloatRef} outZ [Ref]
 * @param {FloatRef} outW [Ref]
 */
export function getEntityQuaternion(entity: EntityIndex, outX: FloatRef /* ptr */, outY: FloatRef /* ptr */, outZ: FloatRef /* ptr */, outW: FloatRef /* ptr */): void {
	const getEntityQuaternion_result = Citizen.invokeNative<void>('0xB66CD98548798F26', entity, outX.dataView, outY.dataView, outZ.dataView, outW.dataView);
	return getEntityQuaternion_result;
}