/**
 * FILES:SETUP_SHOP_PED_APPAREL_QUERY_TU
 *
 * 0x7B6C0A0D604E68FA

 * 
 * character is 0 for Michael, 1 for Franklin, 2 for Trevor, 3 for freemode male, and 4 for freemode female.
 * 
 * componentId is between 0 and 11 and corresponds to the usual component slots.
 * 
 * p1 could be the outfit number; unsure.
 * 
 * p2 is usually -1; unknown function.
 * 
 * p3 appears to be for selecting between clothes and props; false is used with components/clothes, true is used with props.
 * 
 * p4 is usually -1; unknown function.
 * 
 * componentId is -1 when p3 is true in decompiled scripts.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {number} character
 * @param {number} shop
 * @param {number} locate
 * @param {number} apparelType
 * @param {number} anchorPoint
 * @param {number} componentType
 * @returns {number}  
 */
export function setupShopPedApparelQueryTu(character: number, shop: number, locate: number, apparelType: number, anchorPoint: number, componentType: number): number {
	const setupShopPedApparelQueryTu_result = Citizen.invokeNative<number>('0x7B6C0A0D604E68FA', character, shop, locate, apparelType, anchorPoint, componentType);
	return setupShopPedApparelQueryTu_result;
}