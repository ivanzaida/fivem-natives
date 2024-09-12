/**
 * MISC:IS_BULLET_IN_BOX
 *
 * 0x5BF86E66F9BF0BE9

 * 
 * ------------------------------------------------------------------
 * @param {number} minCoorsX
 * @param {number} minCoorsY
 * @param {number} minCoorsZ
 * @param {number} maxCoorsX
 * @param {number} maxCoorsY
 * @param {number} maxCoorsZ
 * @param {boolean} isPlayer Checks if the player fired the bullet.
 * @returns {boolean}  
 */
export function isBulletInBox(minCoorsX: number, minCoorsY: number, minCoorsZ: number, maxCoorsX: number, maxCoorsY: number, maxCoorsZ: number, isPlayer: boolean = true): boolean {
	const isBulletInBox_result = Citizen.invokeNative<boolean>('0x5BF86E66F9BF0BE9', minCoorsX, minCoorsY, minCoorsZ, maxCoorsX, maxCoorsY, maxCoorsZ, isPlayer);
	return isBulletInBox_result;
}