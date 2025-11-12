/**
 * CFX:SET_KEY_MAPPING_HIDE_RESOURCES
 *
 * 0xCB0241B5

 * Toggles the visibility of resource names in the FiveM key mapping page.
 * 
 * ------------------------------------------------------------------
 * @param {boolean} hide true will disable the display of resource names, and false will enable it.
 */
export function setKeyMappingHideResources(hide: boolean): void {
	const setKeyMappingHideResources_result = Citizen.invokeNative<void>('0xCB0241B5', hide);
	return setKeyMappingHideResources_result;
}