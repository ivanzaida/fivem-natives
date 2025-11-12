/**
 * MISC:IS_PROJECTILE_IN_AREA
 *
 * 0xE94C7FA27FEB00DD

 * 
 * Determines whether there is a projectile within the specified coordinates. The coordinates form a rectangle.
 * 
 * - Nacorpio
 * 
 * 
 * ownedByPlayer = only projectiles fired by the player will be detected.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {number} minCoorsX
 * @param {number} minCoorsY
 * @param {number} minCoorsZ
 * @param {number} maxCoorsX
 * @param {number} maxCoorsY
 * @param {number} maxCoorsZ
 * @param {boolean} isPlayer
 * @returns {boolean}  
 */
export function isProjectileInArea(minCoorsX: number, minCoorsY: number, minCoorsZ: number, maxCoorsX: number, maxCoorsY: number, maxCoorsZ: number, isPlayer: boolean = false): boolean {
	const isProjectileInArea_result = Citizen.invokeNative<boolean>('0xE94C7FA27FEB00DD', minCoorsX, minCoorsY, minCoorsZ, maxCoorsX, maxCoorsY, maxCoorsZ, isPlayer);
	return isProjectileInArea_result;
}