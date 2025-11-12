/**
 * MISC:ACTION_MANAGER_ENABLE_ACTION
 *
 * 0x324833E4F1D15D2D

 * 
 * Appears to remove stealth kill action from memory
 * 
 * 
 * ------------------------------------------------------------------
 * @param {number} actionHash
 * @param {boolean} enable
 */
export function actionManagerEnableAction(actionHash: number, enable: boolean): void {
	const actionManagerEnableAction_result = Citizen.invokeNative<void>('0x324833E4F1D15D2D', actionHash, enable);
	return actionManagerEnableAction_result;
}