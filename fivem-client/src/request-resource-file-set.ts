/**
 * CFX:REQUEST_RESOURCE_FILE_SET
 *
 * 0XE7490533

 * Requests a resource file set with the specified name to be downloaded and mounted on top of the current resource.Resource file sets are specified in `fxmanifest.lua` with the following syntax:```luafile_set 'addon_ui' {'ui/addon/index.html','ui/addon/.js',}```This command will trigger a script error if the request failed.
 * 
 * ------------------------------------------------------------------
 * @param {string} setName The name of the file set as specified in fxmanifest.lua.
 * @returns {boolean}  `TRUE` if the set is mounted, `FALSE` if the request is still pending.
 */
export function requestResourceFileSet(setName: string): boolean {
	const requestResourceFileSet_result = Citizen.invokeNative<boolean>('0XE7490533', setName);
	return requestResourceFileSet_result;
}