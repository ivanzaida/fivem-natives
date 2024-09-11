/**
 * GRAPHICS:SET_DECAL_BULLET_IMPACT_RANGE_SCALE
 *
 * 0xEB49514A4F04D59F

 * 
 * ------------------------------------------------------------------
 * @param {number} scale
 */
export function setDecalBulletImpactRangeScale(scale: number): void {
	const setDecalBulletImpactRangeScale_result = Citizen.invokeNative<void>('0xEB49514A4F04D59F', scale);
	return setDecalBulletImpactRangeScale_result;
}