/**
 * HUD:SET_FAKE_GPS_PLAYER_POSITION_THIS_FRAME
 *
 * 0x2474C1A1D3FE2888

 * 
 * p2 maybe z float?
 * 
 * 
 * ------------------------------------------------------------------
 * @param {number} posX
 * @param {number} posY
 * @param {number} posZ
 */
export function setFakeGpsPlayerPositionThisFrame(posX: number, posY: number, posZ: number = 0): void {
	const setFakeGpsPlayerPositionThisFrame_result = Citizen.invokeNative<void>('0x2474C1A1D3FE2888', posX, posY, posZ);
	return setFakeGpsPlayerPositionThisFrame_result;
}