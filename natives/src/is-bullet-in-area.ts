/**
 * MISC:IS_BULLET_IN_AREA
 *
 * 0x398315D0C90DE6F6

 * 
 * ------------------------------------------------------------------
 * @param {number} coorsX
 * @param {number} coorsY
 * @param {number} coorsZ
 * @param {number} radius
 * @param {boolean} isPlayer Checks if the player fired the bullet.
 * @returns {boolean}  
 */
export function isBulletInArea(coorsX: number, coorsY: number, coorsZ: number, radius: number, isPlayer: boolean = true): boolean {
	const isBulletInArea_result = Citizen.invokeNative<boolean>('0x398315D0C90DE6F6', coorsX, coorsY, coorsZ, radius, isPlayer);
	return isBulletInArea_result;
}