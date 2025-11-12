/**
 * NETWORK:NETWORK_SET_TRANSITION_VISIBILITY_LOCK
 *
 * 0x7C7E0FB84F9E6CEE

 * 
 * Lock session visibility.
 * bLockVisibility - Locked or not
 * bLockSetting - Locked to be visible or not
 * 
 * 
 * ------------------------------------------------------------------
 * @param {boolean} lockVisibility
 * @param {boolean} lockSetting
 */
export function networkSetTransitionVisibilityLock(lockVisibility: boolean, lockSetting: boolean): void {
	const networkSetTransitionVisibilityLock_result = Citizen.invokeNative<void>('0x7C7E0FB84F9E6CEE', lockVisibility, lockSetting);
	return networkSetTransitionVisibilityLock_result;
}