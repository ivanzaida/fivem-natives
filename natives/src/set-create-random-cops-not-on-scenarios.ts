/**
 * PED:SET_CREATE_RANDOM_COPS_NOT_ON_SCENARIOS
 *
 * 0xD5E2F27BCC913BE9

 * 
 * ------------------------------------------------------------------
 * @param {boolean} createRandomCops
 */
export function setCreateRandomCopsNotOnScenarios(createRandomCops: boolean): void {
	const setCreateRandomCopsNotOnScenarios_result = Citizen.invokeNative<void>('0xD5E2F27BCC913BE9', createRandomCops);
	return setCreateRandomCopsNotOnScenarios_result;
}