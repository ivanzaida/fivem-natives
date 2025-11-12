/**
 * HUD:SET_FAKE_PAUSEMAP_PLAYER_POSITION_THIS_FRAME
 *
 * 0x83F9B9189E65251B

 * 
 * Sets the position of the arrow icon representing the player on both the minimap and world map.
 * 
 * Too bad this wouldn't work over the network (obviously not). Could spoof where we would be.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {number} posX
 * @param {number} posY
 */
export function setFakePausemapPlayerPositionThisFrame(posX: number, posY: number): void {
	const setFakePausemapPlayerPositionThisFrame_result = Citizen.invokeNative<void>('0x83F9B9189E65251B', posX, posY);
	return setFakePausemapPlayerPositionThisFrame_result;
}