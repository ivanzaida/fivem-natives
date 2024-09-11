import { ShopPedOutfit } from '@ivanzaida/structures'

/**
 * FILES:GET_SHOP_PED_OUTFIT
 *
 * 0x565B95D20273E8CD

 * 
 * ------------------------------------------------------------------
 * @param {number} nameHash
 * @param {ShopPedOutfit} outfitItem [Ref]
 */
export function getShopPedOutfit(nameHash: number, outfitItem: ShopPedOutfit /* ptr */): void {
	const getShopPedOutfit_result = Citizen.invokeNative<void>('0x565B95D20273E8CD', nameHash, outfitItem.dataView);
	return getShopPedOutfit_result;
}