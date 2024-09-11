/**
 * NETWORK:NETWORK_TRANSITION_ADD_STAGE
 *
 * 0x350F7DB8B2765EC2

 * 
 * ------------------------------------------------------------------
 * @param {number} stageHash
 * @param {number} stageSlot
 * @param {number} contextParam1
 * @param {number} contextParam2
 * @param {number} contextParam3
 * @returns {boolean}  
 */
export function networkTransitionAddStage(stageHash: number, stageSlot: number, contextParam1: number, contextParam2: number, contextParam3: number): boolean {
	const networkTransitionAddStage_result = Citizen.invokeNative<boolean>('0x350F7DB8B2765EC2', stageHash, stageSlot, contextParam1, contextParam2, contextParam3);
	return networkTransitionAddStage_result;
}