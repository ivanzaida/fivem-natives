import { IntRef } from '@ivanzaida/structures'

/**
 * CFX:GET_MAPDATA_ENTITY_HANDLE
 *
 * 0x30AA6911

 * Retrieves the map data entity handle.This function supports SDK infrastructure and is not intended to be used directly from your code.
 * 
 * ------------------------------------------------------------------
 * @param {number} mapDataHash A mapdata hash from mapDataLoaded event.
 * @param {number} entityInternalIdx
 * @param {IntRef} entityHandle The output entity handle. [Ref]
 * @returns {boolean}  True if successful, false if not.
 */
export function getMapdataEntityHandle(mapDataHash: number, entityInternalIdx: number, entityHandle: IntRef /* ptr */): boolean {
	const getMapdataEntityHandle_result = Citizen.invokeNative<boolean>('0x30AA6911', mapDataHash, entityInternalIdx, entityHandle.dataView);
	return getMapdataEntityHandle_result;
}