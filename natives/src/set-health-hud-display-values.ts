/**
 * HUD:SET_HEALTH_HUD_DISPLAY_VALUES
 *
 * 0x8128CB4AD398D07B

 * 
 * Sets the hud's health display values directly
 * TURNS OFF REAL-TIME QUERYING. So you'll need to turn this off when you're done
 * by passing in iHealth = -1
 * 
 * 
 * ------------------------------------------------------------------
 * @param {number} health
 * @param {number} armour
 * @param {boolean} showDmg
 */
export function setHealthHudDisplayValues(health: number, armour: number, showDmg: boolean = true): void {
	const setHealthHudDisplayValues_result = Citizen.invokeNative<void>('0x8128CB4AD398D07B', health, armour, showDmg);
	return setHealthHudDisplayValues_result;
}