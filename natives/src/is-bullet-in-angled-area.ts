/**
 * MISC:IS_BULLET_IN_ANGLED_AREA
 *
 * 0xF20EF02FBF173C32

 * 
 * For projectiles, see: IS_PROJECTILE_TYPE_IN_ANGLED_AREA
 * See IS_POINT_IN_ANGLED_AREA for the definition of an angled area.
 * Returns True if a bullet, as maintained by a pool within CWeaponManager, has been fired into the defined angled area.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {number} pos1X
 * @param {number} pos1Y
 * @param {number} pos1Z
 * @param {number} pos2X
 * @param {number} pos2Y
 * @param {number} pos2Z
 * @param {number} areaWidth
 * @param {boolean} isPlayer Checks if the player fired the bullet.
 * @returns {boolean}  
 */
export function isBulletInAngledArea(pos1X: number, pos1Y: number, pos1Z: number, pos2X: number, pos2Y: number, pos2Z: number, areaWidth: number, isPlayer: boolean = true): boolean {
	const isBulletInAngledArea_result = Citizen.invokeNative<boolean>('0xF20EF02FBF173C32', pos1X, pos1Y, pos1Z, pos2X, pos2Y, pos2Z, areaWidth, isPlayer);
	return isBulletInAngledArea_result;
}