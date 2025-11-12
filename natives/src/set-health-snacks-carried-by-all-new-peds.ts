/**
 * PED:SET_HEALTH_SNACKS_CARRIED_BY_ALL_NEW_PEDS
 *
 * 0x4AD0013B427A98CA

 * 
 * Related to Peds dropping pickup_health_snack; p0 is a value between [0.0, 1.0] that corresponds to drop rate
 * 
 * 
 * ------------------------------------------------------------------
 * @param {number} probability
 * @param {number} healthGiven
 */
export function setHealthSnacksCarriedByAllNewPeds(probability: number, healthGiven: number): void {
	const setHealthSnacksCarriedByAllNewPeds_result = Citizen.invokeNative<void>('0x4AD0013B427A98CA', probability, healthGiven);
	return setHealthSnacksCarriedByAllNewPeds_result;
}