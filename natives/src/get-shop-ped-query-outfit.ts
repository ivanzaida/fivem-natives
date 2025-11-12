import { ShopPedOutfit } from '@ivanzaida/structures'

/**
 * FILES:GET_SHOP_PED_QUERY_OUTFIT
 *
 * 0x808A8ABE207631DF

 * 
 * outfitIndex: from 0 to SETUP_SHOP_PED_OUTFIT_QUERY(characterIndex, false) - 1.
 * See https://git.io/JtcB8 for example and outfit struct.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {number} index
 * @param {ShopPedOutfit} outfitItem [Ref]
 */
export function getShopPedQueryOutfit(index: number, outfitItem: ShopPedOutfit /* ptr */): void {
	const getShopPedQueryOutfit_result = Citizen.invokeNative<void>('0x808A8ABE207631DF', index, outfitItem.dataView);
	return getShopPedQueryOutfit_result;
}