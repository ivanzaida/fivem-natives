import { OutfitPropStruct } from '@ivanzaida/structures'

/**
 * FILES:GET_SHOP_PED_OUTFIT_PROP_VARIANT
 *
 * 0xCD4F2395AE80D510

 * 
 * See https://git.io/JtcBH for example and structs.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {number} nameHash
 * @param {number} prop
 * @param {OutfitPropStruct} itemInfo [Ref]
 * @returns {boolean}  
 */
export function getShopPedOutfitPropVariant(nameHash: number, prop: number, itemInfo: OutfitPropStruct /* ptr */): boolean {
	const getShopPedOutfitPropVariant_result = Citizen.invokeNative<boolean>('0xCD4F2395AE80D510', nameHash, prop, itemInfo.dataView);
	return getShopPedOutfitPropVariant_result;
}