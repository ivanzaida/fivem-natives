/**
 * PED:SET_CREATE_RANDOM_COPS_ON_SCENARIOS
 *
 * 0x931C6A48678F5793

 * 
 * ------------------------------------------------------------------
 * @param {boolean} createRandomCops
 */
export function setCreateRandomCopsOnScenarios(createRandomCops: boolean): void {
	const setCreateRandomCopsOnScenarios_result = Citizen.invokeNative<void>('0x931C6A48678F5793', createRandomCops);
	return setCreateRandomCopsOnScenarios_result;
}