/**
 * HUD:LOCK_MINIMAP_POSITION
 *
 * 0x43F4B7E163A31644

 * 
 * Locks the minimap to the specified world position.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {number} posX
 * @param {number} posY
 */
export function lockMinimapPosition(posX: number, posY: number): void {
	const lockMinimapPosition_result = Citizen.invokeNative<void>('0x43F4B7E163A31644', posX, posY);
	return lockMinimapPosition_result;
}