/**
 * MISC:HAS_BULLET_IMPACTED_IN_AREA
 *
 * 0xA646A9FF47E2E515

 * 
 * p3 - possibly radius?
 * 
 * 
 * ------------------------------------------------------------------
 * @param {number} coorsX
 * @param {number} coorsY
 * @param {number} coorsZ
 * @param {number} radius
 * @param {boolean} isPlayer Checks if the player fired the bullet.
 * @param {boolean} entryOnly
 * @returns {boolean}  
 */
export function hasBulletImpactedInArea(coorsX: number, coorsY: number, coorsZ: number, radius: number, isPlayer: boolean = true, entryOnly: boolean = true): boolean {
	const hasBulletImpactedInArea_result = Citizen.invokeNative<boolean>('0xA646A9FF47E2E515', coorsX, coorsY, coorsZ, radius, isPlayer, entryOnly);
	return hasBulletImpactedInArea_result;
}