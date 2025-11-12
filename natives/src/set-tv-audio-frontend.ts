/**
 * GRAPHICS:SET_TV_AUDIO_FRONTEND
 *
 * 0x1BDD93397AF09D53

 * 
 * Probably changes tvs from being a 3d audio to being "global" audio
 * 
 * 
 * ------------------------------------------------------------------
 * @param {boolean} frontend
 */
export function setTvAudioFrontend(frontend: boolean): void {
	const setTvAudioFrontend_result = Citizen.invokeNative<void>('0x1BDD93397AF09D53', frontend);
	return setTvAudioFrontend_result;
}