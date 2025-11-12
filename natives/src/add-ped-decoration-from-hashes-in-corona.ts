import { PedIndex } from '@ivanzaida/structures'

/**
 * PED:ADD_PED_DECORATION_FROM_HASHES_IN_CORONA
 *
 * 0x166CDAB8FE42C210

 * 
 * Same as ADD_PED_DECORATION_FROM_HASHES, but only to be used in a corona screen with non-player cloned peds
 * 
 * Full list of ped overlays / decorations by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/pedOverlayCollections.json
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {number} collectionNameHash
 * @param {number} presetNameHash
 */
export function addPedDecorationFromHashesInCorona(ped: PedIndex, collectionNameHash: number, presetNameHash: number): void {
	const addPedDecorationFromHashesInCorona_result = Citizen.invokeNative<void>('0x166CDAB8FE42C210', ped, collectionNameHash, presetNameHash);
	return addPedDecorationFromHashesInCorona_result;
}