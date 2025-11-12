/**
 * FILES:DOES_SHOP_PED_APPAREL_HAVE_RESTRICTION_TAG
 *
 * 0x304A39EB177D246B

 * 
 * Full list of restriction tags by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/pedApparelRestrictionTags.json
 * 
 * componentId/last parameter seems to be unused.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {number} nameHash
 * @param {number} tagHash
 * @param {number} apparelType
 * @returns {boolean}  
 */
export function doesShopPedApparelHaveRestrictionTag(nameHash: number, tagHash: number, apparelType: number): boolean {
	const doesShopPedApparelHaveRestrictionTag_result = Citizen.invokeNative<boolean>('0x304A39EB177D246B', nameHash, tagHash, apparelType);
	return doesShopPedApparelHaveRestrictionTag_result;
}