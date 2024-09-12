/**
 * GRAPHICS:WATER_REFLECTION_SET_SCRIPT_OBJECT_VISIBILITY
 *
 * 0xF0A089C4753B822D

 * 
 * ------------------------------------------------------------------
 * @param {boolean} forceVisible
 */
export function waterReflectionSetScriptObjectVisibility(forceVisible: boolean): void {
	const waterReflectionSetScriptObjectVisibility_result = Citizen.invokeNative<void>('0xF0A089C4753B822D', forceVisible);
	return waterReflectionSetScriptObjectVisibility_result;
}