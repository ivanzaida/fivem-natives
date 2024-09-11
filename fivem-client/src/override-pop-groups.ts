/**
 * CFX:OVERRIDE_POP_GROUPS
 *
 * 0XD3BC438F

 * Replaces the `popgroups` (CPopGroupList) meta file with the file in the specified path.
 * 
 * ------------------------------------------------------------------
 * @param {string} path The file path to load (popgroups, @resource/popgroups), or null to reload the default population groups file.
 */
export function overridePopGroups(path: string): void {
	const overridePopGroups_result = Citizen.invokeNative<void>('0XD3BC438F', path);
	return overridePopGroups_result;
}