/**
 * AUDIO:SET_NO_DUCKING_FOR_CONVERSATION
 *
 * 0x8B3770418CACFABE

 * 
 * ------------------------------------------------------------------
 * @param {boolean} enable
 */
export function setNoDuckingForConversation(enable: boolean): void {
	const setNoDuckingForConversation_result = Citizen.invokeNative<void>('0x8B3770418CACFABE', enable);
	return setNoDuckingForConversation_result;
}