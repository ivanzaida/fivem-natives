import { PedIndex, EChatFlags } from '@ivanzaida/structures'

/**
 * TASK:TASK_CHAT_TO_PED
 *
 * 0x4663BE37E4E93BC6

 * 
 * p2 tend to be 16, 17 or 1
 * p3 to p7 tend to be 0.0
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {PedIndex} pedToChatTo
 * @param {EChatFlags} chatFlags
 * @param {number} optionalGoToPositionX
 * @param {number} optionalGoToPositionY
 * @param {number} optionalGoToPositionZ
 * @param {number} optionalHeading
 * @param {number} idleTime
 */
export function taskChatToPed(ped: PedIndex, pedToChatTo: PedIndex, chatFlags: EChatFlags | number, optionalGoToPositionX: number, optionalGoToPositionY: number, optionalGoToPositionZ: number, optionalHeading: number, idleTime: number): void {
	const taskChatToPed_result = Citizen.invokeNative<void>('0x4663BE37E4E93BC6', ped, pedToChatTo, chatFlags, optionalGoToPositionX, optionalGoToPositionY, optionalGoToPositionZ, optionalHeading, idleTime);
	return taskChatToPed_result;
}