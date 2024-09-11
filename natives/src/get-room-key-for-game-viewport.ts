/**
 * INTERIOR:GET_ROOM_KEY_FOR_GAME_VIEWPORT
 *
 * 0xA491B07310DC58BE

 * 
 * ------------------------------------------------------------------
 * @returns {number}  
 */
export function getRoomKeyForGameViewport(): number {
	const getRoomKeyForGameViewport_result = Citizen.invokeNative<number>('0xA491B07310DC58BE', );
	return getRoomKeyForGameViewport_result;
}