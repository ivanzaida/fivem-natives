/**
 * NETWORK:REQUEST_COMMERCE_ITEM_IMAGE
 *
 * 0xBF5A33B684B68C2B

 * 
 * Returns true if the image is loaded, so it can repeatedly called until the image is available.
 * Once loaded the image is in the TXD:TextureName returned by GET_COMMERCE_ITEM_TEXTURENAME
 * For example, GET_COMMERCE_ITEM_TEXTURENAME returns "TestTexture", the downloaded texture is in TestTexture:TestTexture
 * 
 * 
 * ------------------------------------------------------------------
 * @param {number} index
 * @returns {boolean}  
 */
export function requestCommerceItemImage(index: number): boolean {
	const requestCommerceItemImage_result = Citizen.invokeNative<boolean>('0xBF5A33B684B68C2B', index);
	return requestCommerceItemImage_result;
}