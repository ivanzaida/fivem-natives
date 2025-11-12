/**
 * AUDIO:REMOVE_PORTAL_SETTINGS_OVERRIDE
 *
 * 0xFAF6BF5476CB00A8

 * 
 * Found in the b617d scripts, duplicates removed:
 * 
 *  AUDIO::REMOVE_PORTAL_SETTINGS_OVERRIDE("V_CARSHOWROOM_PS_WINDOW_UNBROKEN");
 *  AUDIO::REMOVE_PORTAL_SETTINGS_OVERRIDE("V_CIA_PS_WINDOW_UNBROKEN");
 *  AUDIO::REMOVE_PORTAL_SETTINGS_OVERRIDE("V_DLC_HEIST_APARTMENT_DOOR_CLOSED");
 *  AUDIO::REMOVE_PORTAL_SETTINGS_OVERRIDE("V_FINALEBANK_PS_VAULT_INTACT");
 *  AUDIO::REMOVE_PORTAL_SETTINGS_OVERRIDE("V_MICHAEL_PS_BATHROOM_WITH_WINDOW");
 * 
 * 
 * ------------------------------------------------------------------
 * @param {string} portalSettingsName
 */
export function removePortalSettingsOverride(portalSettingsName: string): void {
	const removePortalSettingsOverride_result = Citizen.invokeNative<void>('0xFAF6BF5476CB00A8', portalSettingsName);
	return removePortalSettingsOverride_result;
}