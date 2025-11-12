/**
 * GRAPHICS:UI3DSCENE_CLEAR_PATCHED_DATA
 *
 * 0xA33BDA0B7720976B

 * 
 * This can be called after using a preset that has been patched with peds (eg: UI3DSCENE_ASSIGN_PED_TO_SLOT)
 * to make sure all the slots are cleared after rendering the peds
 * 
 * 
 * ------------------------------------------------------------------
 */
export function ui3DsceneClearPatchedData(): void {
	const ui3DsceneClearPatchedData_result = Citizen.invokeNative<void>('0xA33BDA0B7720976B', );
	return ui3DsceneClearPatchedData_result;
}