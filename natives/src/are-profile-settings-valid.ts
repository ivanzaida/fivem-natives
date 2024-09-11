/**
 * MISC:ARE_PROFILE_SETTINGS_VALID
 *
 * 0x76CA59C648318506

 * 
 * ------------------------------------------------------------------
 * @returns {boolean}  
 */
export function areProfileSettingsValid(): boolean {
	const areProfileSettingsValid_result = Citizen.invokeNative<boolean>('0x76CA59C648318506', );
	return areProfileSettingsValid_result;
}