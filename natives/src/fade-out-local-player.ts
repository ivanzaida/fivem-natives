/**
 * NETWORK:FADE_OUT_LOCAL_PLAYER
 *
 * 0x6E2FA5434737D22F

 * 
 * Hardcoded to not work in SP.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {boolean} fadeOut
 */
export function fadeOutLocalPlayer(fadeOut: boolean): void {
	const fadeOutLocalPlayer_result = Citizen.invokeNative<void>('0x6E2FA5434737D22F', fadeOut);
	return fadeOutLocalPlayer_result;
}