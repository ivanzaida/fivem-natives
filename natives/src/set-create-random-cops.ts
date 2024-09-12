/**
 * PED:SET_CREATE_RANDOM_COPS
 *
 * 0xD682DD0578BF5392

 * 
 * ------------------------------------------------------------------
 * @param {boolean} createRandomCopsFlag
 */
export function setCreateRandomCops(createRandomCopsFlag: boolean): void {
	const setCreateRandomCops_result = Citizen.invokeNative<void>('0xD682DD0578BF5392', createRandomCopsFlag);
	return setCreateRandomCops_result;
}