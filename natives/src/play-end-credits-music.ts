/**
 * AUDIO:PLAY_END_CREDITS_MUSIC
 *
 * 0xB830B097D0050A2F

 * 
 * ------------------------------------------------------------------
 * @param {boolean} active
 */
export function playEndCreditsMusic(active: boolean): void {
	const playEndCreditsMusic_result = Citizen.invokeNative<void>('0xB830B097D0050A2F', active);
	return playEndCreditsMusic_result;
}