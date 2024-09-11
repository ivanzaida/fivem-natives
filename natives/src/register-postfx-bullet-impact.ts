/**
 * GRAPHICS:REGISTER_POSTFX_BULLET_IMPACT
 *
 * 0xB0B142E5C2067BC4

 * 
 * ------------------------------------------------------------------
 * @param {number} weaponWorldPosX
 * @param {number} weaponWorldPosY
 * @param {number} weaponWorldPosZ
 * @param {number} intensity
 */
export function registerPostfxBulletImpact(weaponWorldPosX: number, weaponWorldPosY: number, weaponWorldPosZ: number, intensity: number): void {
	const registerPostfxBulletImpact_result = Citizen.invokeNative<void>('0xB0B142E5C2067BC4', weaponWorldPosX, weaponWorldPosY, weaponWorldPosZ, intensity);
	return registerPostfxBulletImpact_result;
}