/**
 * OBJECT:SET_PICKUP_OBJECT_ALPHA_WHEN_TRANSPARENT
 *
 * 0x7E1C4CAEFA5571B2

 * 
 * p0 is either 0 or 50 in scripts.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {number} pickupAlpha
 */
export function setPickupObjectAlphaWhenTransparent(pickupAlpha: number): void {
	const setPickupObjectAlphaWhenTransparent_result = Citizen.invokeNative<void>('0x7E1C4CAEFA5571B2', pickupAlpha);
	return setPickupObjectAlphaWhenTransparent_result;
}