/**
 * MISC:HAS_BULLET_IMPACTED_IN_BOX
 *
 * 0xB7C4B23CEF2B3B58

 * 
 * ------------------------------------------------------------------
 * @param {number} minCoorsX
 * @param {number} minCoorsY
 * @param {number} minCoorsZ
 * @param {number} maxCoorsX
 * @param {number} maxCoorsY
 * @param {number} maxCoorsZ
 * @param {boolean} isPlayer Checks if the player fired the bullet.
 * @param {boolean} entryOnly
 * @returns {boolean}  
 */
export function hasBulletImpactedInBox(minCoorsX: number, minCoorsY: number, minCoorsZ: number, maxCoorsX: number, maxCoorsY: number, maxCoorsZ: number, isPlayer: boolean = true, entryOnly: boolean = true): boolean {
	const hasBulletImpactedInBox_result = Citizen.invokeNative<boolean>('0xB7C4B23CEF2B3B58', minCoorsX, minCoorsY, minCoorsZ, maxCoorsX, maxCoorsY, maxCoorsZ, isPlayer, entryOnly);
	return hasBulletImpactedInBox_result;
}