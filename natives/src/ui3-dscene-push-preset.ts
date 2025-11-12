/**
 * GRAPHICS:UI3DSCENE_PUSH_PRESET
 *
 * 0xCB55C62F869F934A

 * 
 * Sets the preset as the current one; this needs to be done before assigning peds to the preset slots
 * It will return false if the preset doesn't exist or if the system is already in use.
 * 
 * All presets can be found in common\data\ui\uiscenes.meta
 * 
 * 
 * ------------------------------------------------------------------
 * @param {string} presetName
 * @returns {boolean}  
 */
export function ui3DscenePushPreset(presetName: string): boolean {
	const ui3DscenePushPreset_result = Citizen.invokeNative<boolean>('0xCB55C62F869F934A', presetName);
	return ui3DscenePushPreset_result;
}