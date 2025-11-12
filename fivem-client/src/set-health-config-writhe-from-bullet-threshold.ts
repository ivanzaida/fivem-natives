/**
 * CFX:SET_HEALTH_CONFIG_WRITHE_FROM_BULLET_THRESHOLD
 *
 * 0xE97633CB

 * Sets default writhe from bullet threshold value for specific health config.
 * 
 * ------------------------------------------------------------------
 * @param {string} configName Name of health config.
 * @param {number} newValue Value
 */
export function setHealthConfigWritheFromBulletThreshold(configName: string, newValue: number): void {
	const setHealthConfigWritheFromBulletThreshold_result = Citizen.invokeNative<void>('0xE97633CB', configName, newValue);
	return setHealthConfigWritheFromBulletThreshold_result;
}