/**
 * INTERIOR:SET_ROOM_FOR_GAME_VIEWPORT_BY_NAME
 *
 * 0xDC750660004ECB83

 * 
 * Example of use (carmod_shop)
 * INTERIOR::SET_ROOM_FOR_GAME_VIEWPORT_BY_NAME("V_CarModRoom");
 * 
 * 
 * ------------------------------------------------------------------
 * @param {string} roomName
 */
export function setRoomForGameViewportByName(roomName: string): void {
	const setRoomForGameViewportByName_result = Citizen.invokeNative<void>('0xDC750660004ECB83', roomName);
	return setRoomForGameViewportByName_result;
}