/**
 * AUDIO:DOES_PLAYER_VEH_HAVE_RADIO
 *
 * 0x2044128E627E0951

 * 
 * ------------------------------------------------------------------
 * @returns {boolean}  
 */
export function doesPlayerVehHaveRadio(): boolean {
	const doesPlayerVehHaveRadio_result = Citizen.invokeNative<boolean>('0x2044128E627E0951', );
	return doesPlayerVehHaveRadio_result;
}