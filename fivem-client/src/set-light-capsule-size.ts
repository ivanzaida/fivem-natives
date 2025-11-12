/**
 * CFX:SET_LIGHT_CAPSULE_SIZE
 *
 * 0xA3881271

 * Set the capsule size of a specified light.
 * 
 * ------------------------------------------------------------------
 * @param {number} size The capsule size value
 */
export function setLightCapsuleSize(size: number): void {
	const setLightCapsuleSize_result = Citizen.invokeNative<void>('0xA3881271', size);
	return setLightCapsuleSize_result;
}