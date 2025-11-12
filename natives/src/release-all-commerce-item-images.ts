/**
 * NETWORK:RELEASE_ALL_COMMERCE_ITEM_IMAGES
 *
 * 0x687DE1873713BF49

 * 
 * Releases any downloaded textures and cancels downloads.
 * Please call this when operations on store textures are complete.
 * 
 * 
 * ------------------------------------------------------------------
 */
export function releaseAllCommerceItemImages(): void {
	const releaseAllCommerceItemImages_result = Citizen.invokeNative<void>('0x687DE1873713BF49', );
	return releaseAllCommerceItemImages_result;
}