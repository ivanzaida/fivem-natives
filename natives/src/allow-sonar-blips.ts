/**
 * HUD:ALLOW_SONAR_BLIPS
 *
 * 0xCB3A062F0CD9B0CD

 * 
 * ------------------------------------------------------------------
 * @param {boolean} set
 */
export function allowSonarBlips(set: boolean): void {
	const allowSonarBlips_result = Citizen.invokeNative<void>('0xCB3A062F0CD9B0CD', set);
	return allowSonarBlips_result;
}