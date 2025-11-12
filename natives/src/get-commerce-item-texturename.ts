/**
 * NETWORK:GET_COMMERCE_ITEM_TEXTURENAME
 *
 * 0x4ABEBEE42452BF31

 * 
 * Returns null string if image is not available (product has no image path).
 * Otherwise returns the texture/txd name of the items texture
 * Note: Cannot be used to check for texture download state, is just a manipulation of the string returned by GET_COMMERCE_ITEM_IMAGENAME
 * 
 * 
 * ------------------------------------------------------------------
 * @param {number} index
 * @returns {string}  
 */
export function getCommerceItemTexturename(index: number): string {
	const getCommerceItemTexturename_result = Citizen.invokeNative<string>('0x4ABEBEE42452BF31', index);
	return getCommerceItemTexturename_result;
}