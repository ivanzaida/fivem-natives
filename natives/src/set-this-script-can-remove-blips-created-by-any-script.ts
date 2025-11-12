/**
 * MISC:SET_THIS_SCRIPT_CAN_REMOVE_BLIPS_CREATED_BY_ANY_SCRIPT
 *
 * 0x9F83BF77C7204C05

 * 
 * Required so that the debug and main scripts are able to remove blips created by other scripts
 * when Keith's game flow code skips forward or back
 * 
 * 
 * ------------------------------------------------------------------
 * @param {boolean} canRemoveBlipsCreatedByOtherScripts
 */
export function setThisScriptCanRemoveBlipsCreatedByAnyScript(canRemoveBlipsCreatedByOtherScripts: boolean): void {
	const setThisScriptCanRemoveBlipsCreatedByAnyScript_result = Citizen.invokeNative<void>('0x9F83BF77C7204C05', canRemoveBlipsCreatedByOtherScripts);
	return setThisScriptCanRemoveBlipsCreatedByAnyScript_result;
}