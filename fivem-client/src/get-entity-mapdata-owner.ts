import { EntityIndex, IntRef } from '@ivanzaida/structures'

/**
 * CFX:GET_ENTITY_MAPDATA_OWNER
 *
 * 0xF6B815C5

 * Retrieves the map data and entity handles from a specific entity.This function supports SDK infrastructure and is not intended to be used directly from your code.
 * 
 * ------------------------------------------------------------------
 * @param {EntityIndex} entity An entity owned by map data.
 * @param {IntRef} mapdataHandle The output map data handle. [Ref]
 * @param {IntRef} entityHandle The output entity handle. [Ref]
 * @returns {boolean}  True if successful, false if not.
 */
export function getEntityMapdataOwner(entity: EntityIndex, mapdataHandle: IntRef /* ptr */, entityHandle: IntRef /* ptr */): boolean {
	const getEntityMapdataOwner_result = Citizen.invokeNative<boolean>('0xF6B815C5', entity, mapdataHandle.dataView, entityHandle.dataView);
	return getEntityMapdataOwner_result;
}