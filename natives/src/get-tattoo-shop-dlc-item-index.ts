import { ETattooFaction } from '@ivanzaida/structures'

/**
 * FILES:GET_TATTOO_SHOP_DLC_ITEM_INDEX
 *
 * 0xE80EBC1CABE1C8A7

 * 
 * Returns the index of the tattoo that matches the faction and hash parameters.
 * This index can then be used to call GET_TATTOO_SHOP_DLC_ITEM_DATA
 * 
 * Returns some sort of index/offset for overlays/decorations.
 * 
 * Character types:
 * 0 = Michael,
 * 1 = Franklin,
 * 2 = Trevor,
 * 3 = MPMale,
 * 4 = MPFemale
 * 
 * 
 * ------------------------------------------------------------------
 * @param {ETattooFaction} tattooFaction
 * @param {number} collectionHash
 * @param {number} presetHash
 * @returns {number}  
 */
export function getTattooShopDlcItemIndex(tattooFaction: ETattooFaction | number, collectionHash: number, presetHash: number): number {
	const getTattooShopDlcItemIndex_result = Citizen.invokeNative<number>('0xE80EBC1CABE1C8A7', tattooFaction, collectionHash, presetHash);
	return getTattooShopDlcItemIndex_result;
}