/**
 * INTERIOR:SET_ROOM_FOR_GAME_VIEWPORT_BY_KEY
 *
 * 0x2EFEB897BDD17B5B

 * 
 * Usage: INTERIOR::SET_ROOM_FOR_GAME_VIEWPORT_BY_KEY(INTERIOR::GET_KEY_FOR_ENTITY_IN_ROOM(PLAYER::PLAYER_PED_ID()));
 * 
 * 
 * ------------------------------------------------------------------
 * @param {number} roomKey
 */
export function setRoomForGameViewportByKey(roomKey: number): void {
	const setRoomForGameViewportByKey_result = Citizen.invokeNative<void>('0x2EFEB897BDD17B5B', roomKey);
	return setRoomForGameViewportByKey_result;
}