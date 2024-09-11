import { EntityIndex, Vector3 } from '@ivanzaida/structures'

/**
 * PHYSICS:GET_CGOFFSET
 *
 * 0x30E2D00B68214AB1

 * 
 * ------------------------------------------------------------------
 * @param {EntityIndex} entityId
 * @returns {Vector3}  
 */
export function getCgoffset(entityId: EntityIndex): Vector3 {
	const getCgoffset_result = Citizen.invokeNative<Vector3>('0x30E2D00B68214AB1', entityId);
	return getCgoffset_result;
}