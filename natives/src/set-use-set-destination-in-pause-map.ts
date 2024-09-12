/**
 * HUD:SET_USE_SET_DESTINATION_IN_PAUSE_MAP
 *
 * 0x5E0F50AE21F74BC0

 * 
 * ------------------------------------------------------------------
 * @param {boolean} useSetDestinationInMapMenu
 */
export function setUseSetDestinationInPauseMap(useSetDestinationInMapMenu: boolean): void {
	const setUseSetDestinationInPauseMap_result = Citizen.invokeNative<void>('0x5E0F50AE21F74BC0', useSetDestinationInMapMenu);
	return setUseSetDestinationInPauseMap_result;
}