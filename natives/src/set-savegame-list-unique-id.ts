/**
 * HUD:SET_SAVEGAME_LIST_UNIQUE_ID
 *
 * 0xD86E372FF627C3B2

 * 
 * ------------------------------------------------------------------
 * @param {number} uniqueId
 */
export function setSavegameListUniqueId(uniqueId: number): void {
	const setSavegameListUniqueId_result = Citizen.invokeNative<void>('0xD86E372FF627C3B2', uniqueId);
	return setSavegameListUniqueId_result;
}