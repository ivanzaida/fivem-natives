/**
 * HUD:SET_MINIMAP_FOW_DO_NOT_UPDATE
 *
 * 0x7FCEE9F97020FFFD

 * 
 * ------------------------------------------------------------------
 * @param {boolean} doNotUpdate
 */
export function setMinimapFowDoNotUpdate(doNotUpdate: boolean): void {
	const setMinimapFowDoNotUpdate_result = Citizen.invokeNative<void>('0x7FCEE9F97020FFFD', doNotUpdate);
	return setMinimapFowDoNotUpdate_result;
}