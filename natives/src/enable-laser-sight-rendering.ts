/**
 * WEAPON:ENABLE_LASER_SIGHT_RENDERING
 *
 * 0xAB078CF87FA0D018

 * 
 * Enables laser sight on any weapon.
 * 
 * It doesn't work. Neither on tick nor OnKeyDown
 * 
 * 
 * ------------------------------------------------------------------
 * @param {boolean} enable
 */
export function enableLaserSightRendering(enable: boolean): void {
	const enableLaserSightRendering_result = Citizen.invokeNative<void>('0xAB078CF87FA0D018', enable);
	return enableLaserSightRendering_result;
}