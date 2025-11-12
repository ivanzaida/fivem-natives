/**
 * AUDIO:SET_USER_RADIO_CONTROL_ENABLED
 *
 * 0x938C85923AD6778A

 * 
 * Scripts can call this safely without worrying about conflicts with other scripts - calls can be
 * nested, and if any system wants radio control disabled then it will be.  This does mean that scripts
 * must ensure they only call this function when their state changes, and not every frame
 * 
 * 
 * ------------------------------------------------------------------
 * @param {boolean} enabled
 */
export function setUserRadioControlEnabled(enabled: boolean): void {
	const setUserRadioControlEnabled_result = Citizen.invokeNative<void>('0x938C85923AD6778A', enabled);
	return setUserRadioControlEnabled_result;
}