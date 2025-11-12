import { ETattooFaction } from '@ivanzaida/structures'

/**
 * FILES:GET_NUM_TATTOO_SHOP_DLC_ITEMS
 *
 * 0x82D6E3FDBD0A80B6

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
 * @returns {number}  
 */
export function getNumTattooShopDlcItems(tattooFaction: ETattooFaction | number): number {
	const getNumTattooShopDlcItems_result = Citizen.invokeNative<number>('0x82D6E3FDBD0A80B6', tattooFaction);
	return getNumTattooShopDlcItems_result;
}