import { OutfitCompStruct } from '@ivanzaida/structures'

/**
 * FILES:GET_SHOP_PED_OUTFIT_COMPONENT_VARIANT
 *
 * 0xABE43EB6EBE5F2F5

 * 
 * See https://git.io/JtcBH for example and structs.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {number} nameHash
 * @param {number} component
 * @param {OutfitCompStruct} itemInfo [Ref]
 * @returns {boolean}  
 */
export function getShopPedOutfitComponentVariant(nameHash: number, component: number, itemInfo: OutfitCompStruct /* ptr */): boolean {
	const getShopPedOutfitComponentVariant_result = Citizen.invokeNative<boolean>('0xABE43EB6EBE5F2F5', nameHash, component, itemInfo.dataView);
	return getShopPedOutfitComponentVariant_result;
}