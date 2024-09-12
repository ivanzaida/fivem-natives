/**
 * CFX:GET_ENTITY_INDEX_FROM_MAPDATA
 *
 * 0xEE43540D

 * Returns the transient entity index for a specified mapdata/entity pair.This function supports SDK infrastructure and is not intended to be used directly from your code.
 * 
 * ------------------------------------------------------------------
 * @param {number} mapdata The input map data index from GET_MAPDATA_FROM_HASH_KEY.
 * @param {number} entity The input entity handle from GET_ENTITY_MAPDATA_OWNER.
 * @returns {number}  A transient (non-persistable) index to the requested entity, or -1.
 */
export function getEntityIndexFromMapdata(mapdata: number, entity: number): number {
	const getEntityIndexFromMapdata_result = Citizen.invokeNative<number>('0xEE43540D', mapdata, entity);
	return getEntityIndexFromMapdata_result;
}