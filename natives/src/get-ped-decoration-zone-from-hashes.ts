import { EPedDecorationZone } from '@ivanzaida/structures'

/**
 * PED:GET_PED_DECORATION_ZONE_FROM_HASHES
 *
 * 0x50CA4ACB66148FF0

 * 
 * Returns the zoneID for the overlay if it is a member of collection.
 * enum ePedDecorationZone
 * {
 * 	ZONE_TORSO = 0,
 * 	ZONE_HEAD = 1,
 * 	ZONE_LEFT_ARM = 2,
 * 	ZONE_RIGHT_ARM = 3,
 * 	ZONE_LEFT_LEG = 4,
 * 	ZONE_RIGHT_LEG = 5,
 * 	ZONE_MEDALS = 6,
 * 	ZONE_INVALID = 7
 * };
 * 
 * Full list of ped overlays / decorations by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/pedOverlayCollections.json
 * 
 * 
 * ------------------------------------------------------------------
 * @param {number} collectionNameHash
 * @param {number} presetNameHash
 * @returns {EPedDecorationZone}  
 */
export function getPedDecorationZoneFromHashes(collectionNameHash: number, presetNameHash: number): EPedDecorationZone {
	const getPedDecorationZoneFromHashes_result = Citizen.invokeNative<EPedDecorationZone>('0x50CA4ACB66148FF0', collectionNameHash, presetNameHash);
	return getPedDecorationZoneFromHashes_result;
}