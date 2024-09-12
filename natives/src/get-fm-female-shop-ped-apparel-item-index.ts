/**
 * PED:GET_FM_FEMALE_SHOP_PED_APPAREL_ITEM_INDEX
 *
 * 0x6F4B2AB7CFB2F472

 * 
 * ------------------------------------------------------------------
 * @param {number} nameHash
 * @returns {number}  
 */
export function getFmFemaleShopPedApparelItemIndex(nameHash: number): number {
	const getFmFemaleShopPedApparelItemIndex_result = Citizen.invokeNative<number>('0x6F4B2AB7CFB2F472', nameHash);
	return getFmFemaleShopPedApparelItemIndex_result;
}