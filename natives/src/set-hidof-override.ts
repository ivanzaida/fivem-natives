/**
 * GRAPHICS:SET_HIDOF_OVERRIDE
 *
 * 0xC31DA93280D5F36A

 * 
 * ------------------------------------------------------------------
 * @param {boolean} enableOverride
 * @param {boolean} enableDOF
 * @param {number} dofNearStart
 * @param {number} dofNearEnd
 * @param {number} dofFarStart
 * @param {number} dofFarEnd
 */
export function setHidofOverride(enableOverride: boolean, enableDOF: boolean, dofNearStart: number, dofNearEnd: number, dofFarStart: number, dofFarEnd: number): void {
	const setHidofOverride_result = Citizen.invokeNative<void>('0xC31DA93280D5F36A', enableOverride, enableDOF, dofNearStart, dofNearEnd, dofFarStart, dofFarEnd);
	return setHidofOverride_result;
}