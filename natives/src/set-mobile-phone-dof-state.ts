/**
 * MOBILE:SET_MOBILE_PHONE_DOF_STATE
 *
 * 0x453DA8CFCDA69D26

 * 
 * ------------------------------------------------------------------
 * @param {boolean} enable
 */
export function setMobilePhoneDofState(enable: boolean): void {
	const setMobilePhoneDofState_result = Citizen.invokeNative<void>('0x453DA8CFCDA69D26', enable);
	return setMobilePhoneDofState_result;
}