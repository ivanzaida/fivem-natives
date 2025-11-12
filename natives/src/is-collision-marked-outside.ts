/**
 * INTERIOR:IS_COLLISION_MARKED_OUTSIDE
 *
 * 0x7830326EF9D54DBB

 * 
 * Returns true if the collision at the specified coords is marked as being outside (false if there's an interior)
 * 
 * 
 * ------------------------------------------------------------------
 * @param {number} inCoorsX
 * @param {number} inCoorsY
 * @param {number} inCoorsZ
 * @returns {boolean}  
 */
export function isCollisionMarkedOutside(inCoorsX: number, inCoorsY: number, inCoorsZ: number): boolean {
	const isCollisionMarkedOutside_result = Citizen.invokeNative<boolean>('0x7830326EF9D54DBB', inCoorsX, inCoorsY, inCoorsZ);
	return isCollisionMarkedOutside_result;
}