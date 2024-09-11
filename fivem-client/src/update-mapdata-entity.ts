/**
 * CFX:UPDATE_MAPDATA_ENTITY
 *
 * 0XFC52CB91

 * Transiently updates the entity with the specified mapdata index and entity index.This function supports SDK infrastructure and is not intended to be used directly from your code.
 * 
 * ------------------------------------------------------------------
 * @param {number} mapdata A fwMapData index from GET_MAPDATA_FROM_HASH_KEY.
 * @param {number} entity An entity index from GET_ENTITY_INDEX_FROM_MAPDATA.
 * @param {any} entityDef The new entity definition in fwEntityDef format.
 */
export function updateMapdataEntity(mapdata: number, entity: number, entityDef: any): void {
	const updateMapdataEntity_result = Citizen.invokeNative<void>('0XFC52CB91', mapdata, entity, entityDef);
	return updateMapdataEntity_result;
}