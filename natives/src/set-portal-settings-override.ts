/**
 * AUDIO:SET_PORTAL_SETTINGS_OVERRIDE
 *
 * 0xC73D0514D61174D1

 * 
 * Found in the b617d scripts, duplicates removed:
 * 
 * AUDIO::SET_PORTAL_SETTINGS_OVERRIDE("V_CARSHOWROOM_PS_WINDOW_UNBROKEN", "V_CARSHOWROOM_PS_WINDOW_BROKEN");
 * 
 *  AUDIO::SET_PORTAL_SETTINGS_OVERRIDE("V_CIA_PS_WINDOW_UNBROKEN", "V_CIA_PS_WINDOW_BROKEN");
 * 
 *  AUDIO::SET_PORTAL_SETTINGS_OVERRIDE("V_DLC_HEIST_APARTMENT_DOOR_CLOSED", "V_DLC_HEIST_APARTMENT_DOOR_OPEN");
 * 
 *  AUDIO::SET_PORTAL_SETTINGS_OVERRIDE("V_FINALEBANK_PS_VAULT_INTACT", "V_FINALEBANK_PS_VAULT_BLOWN");
 * 
 *  AUDIO::SET_PORTAL_SETTINGS_OVERRIDE("V_MICHAEL_PS_BATHROOM_WITH_WINDOW", "V_MICHAEL_PS_BATHROOM_WITHOUT_WINDOW");
 * 
 * 
 * ------------------------------------------------------------------
 * @param {string} oldPortalSettingsName
 * @param {string} newPortalSettingsName
 */
export function setPortalSettingsOverride(oldPortalSettingsName: string, newPortalSettingsName: string): void {
	const setPortalSettingsOverride_result = Citizen.invokeNative<void>('0xC73D0514D61174D1', oldPortalSettingsName, newPortalSettingsName);
	return setPortalSettingsOverride_result;
}