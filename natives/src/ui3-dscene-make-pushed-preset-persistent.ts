/**
 * GRAPHICS:UI3DSCENE_MAKE_PUSHED_PRESET_PERSISTENT
 *
 * 0xEB1896D38B4F1DB4

 * 
 * This can be called afterhaving pushed and patched a preset to automatically keep it rendering
 * every frame until the persistent flag is disabled. This should only be used in cases where script
 * is unable to push a preset every frame to keep it rendering (e.g.: script is paused).
 * No other user can push new presets while UI3DSCENE_MAKE_PUSHED_PRESET_PERSISTENT is enabled.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {boolean} enabled
 */
export function ui3DsceneMakePushedPresetPersistent(enabled: boolean): void {
	const ui3DsceneMakePushedPresetPersistent_result = Citizen.invokeNative<void>('0xEB1896D38B4F1DB4', enabled);
	return ui3DsceneMakePushedPresetPersistent_result;
}