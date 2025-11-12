/**
 * HUD:GET_FAKE_SPECTATOR_MODE
 *
 * 0x88F53A922D4F476E

 * 
 * Getter for SET_FAKE_SPECTATOR_MODE
 * 
 * 
 * ------------------------------------------------------------------
 * @returns {boolean}  
 */
export function getFakeSpectatorMode(): boolean {
	const getFakeSpectatorMode_result = Citizen.invokeNative<boolean>('0x88F53A922D4F476E', );
	return getFakeSpectatorMode_result;
}