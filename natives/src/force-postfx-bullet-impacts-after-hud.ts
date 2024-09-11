/**
 * GRAPHICS:FORCE_POSTFX_BULLET_IMPACTS_AFTER_HUD
 *
 * 0x989F8AD94D00CA21

 * 
 * ------------------------------------------------------------------
 * @param {boolean} enable
 */
export function forcePostfxBulletImpactsAfterHud(enable: boolean): void {
	const forcePostfxBulletImpactsAfterHud_result = Citizen.invokeNative<void>('0x989F8AD94D00CA21', enable);
	return forcePostfxBulletImpactsAfterHud_result;
}