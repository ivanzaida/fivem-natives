import { PedIndex } from '@ivanzaida/structures'

/**
 * CFX:ADD_PED_DECORATION_FROM_HASHES
 *
 * 0x70559AC7

 * 
 * Same as ADD_PED_DECORATION, but with hashes
 * 
 * Applies an Item from a PedDecorationCollection to a ped. These include tattoos and shirt decals.
 * 
 * collection - PedDecorationCollection filename hash
 * overlay - Item name hash
 * 
 * Example:
 * Entry inside "mpbeach_overlays.xml" -
 * <Item>
 *   <uvPos x="0.500000" y="0.500000" />
 *   <scale x="0.600000" y="0.500000" />
 *   <rotation value="0.000000" />
 *   <nameHash>FM_Hair_Fuzz</nameHash>
 *   <txdHash>mp_hair_fuzz</txdHash>
 *   <txtHash>mp_hair_fuzz</txtHash>
 *   <zone>ZONE_HEAD</zone>
 *   <type>TYPE_TATTOO</type>
 *   <faction>FM</faction>
 *   <garment>All</garment>
 *   <gender>GENDER_DONTCARE</gender>
 *   <award />
 *   <awardLevel />
 * </Item>
 * 
 * Code:
 * PED::ADD_PED_DECORATION_FROM_HASHES(PLAYER::PLAYER_PED_ID(), MISC::GET_HASH_KEY("mpbeach_overlays"), MISC::GET_HASH_KEY("fm_hair_fuzz"))
 * 
 * Full list of ped overlays / decorations by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/pedOverlayCollections.json
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {number} collection
 * @param {number} overlay
 */
export function addPedDecorationFromHashes(ped: PedIndex, collection: number, overlay: number): void {
	const addPedDecorationFromHashes_result = Citizen.invokeNative<void>('0x70559AC7', ped, collection, overlay);
	return addPedDecorationFromHashes_result;
}