/**
 * MISC:IS_SNIPER_BULLET_IN_AREA
 *
 * 0xD83D7629BFD65725

 * 
 * Determines whether there is a sniper bullet within the specified coordinates. The coordinates form an axis-aligned bounding box.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {number} minCoorsX
 * @param {number} minCoorsY
 * @param {number} minCoorsZ
 * @param {number} maxCoorsX
 * @param {number} maxCoorsY
 * @param {number} maxCoorsZ
 * @returns {boolean}  
 */
export function isSniperBulletInArea(minCoorsX: number, minCoorsY: number, minCoorsZ: number, maxCoorsX: number, maxCoorsY: number, maxCoorsZ: number): boolean {
	const isSniperBulletInArea_result = Citizen.invokeNative<boolean>('0xD83D7629BFD65725', minCoorsX, minCoorsY, minCoorsZ, maxCoorsX, maxCoorsY, maxCoorsZ);
	return isSniperBulletInArea_result;
}