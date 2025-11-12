/**
 * PLAYER:SET_PLAYER_CLOTH_PACKAGE_INDEX
 *
 * 0x0DAFB2A5B123922B

 * 
 * Switch to extra set of pin radiuses
 * 
 * Every occurrence was either 0 or 2.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {number} pkg
 */
export function setPlayerClothPackageIndex(pkg: number): void {
	const setPlayerClothPackageIndex_result = Citizen.invokeNative<void>('0x0DAFB2A5B123922B', pkg);
	return setPlayerClothPackageIndex_result;
}