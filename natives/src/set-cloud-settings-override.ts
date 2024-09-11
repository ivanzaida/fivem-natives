/**
 * MISC:SET_CLOUD_SETTINGS_OVERRIDE
 *
 * 0x6D47423391C7C131

 * 
 * ------------------------------------------------------------------
 * @param {string} overrideSettingsName
 */
export function setCloudSettingsOverride(overrideSettingsName: string): void {
	const setCloudSettingsOverride_result = Citizen.invokeNative<void>('0x6D47423391C7C131', overrideSettingsName);
	return setCloudSettingsOverride_result;
}