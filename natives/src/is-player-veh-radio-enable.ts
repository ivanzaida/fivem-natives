/**
 * AUDIO:IS_PLAYER_VEH_RADIO_ENABLE
 *
 * 0x28D9C88BBCC658EF

 * 
 * ------------------------------------------------------------------
 * @returns {boolean}  
 */
export function isPlayerVehRadioEnable(): boolean {
	const isPlayerVehRadioEnable_result = Citizen.invokeNative<boolean>('0x28D9C88BBCC658EF', );
	return isPlayerVehRadioEnable_result;
}