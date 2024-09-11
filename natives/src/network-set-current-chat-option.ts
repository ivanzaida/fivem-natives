/**
 * NETWORK:NETWORK_SET_CURRENT_CHAT_OPTION
 *
 * 0x0B933C101279FCB7

 * 
 * ------------------------------------------------------------------
 * @param {number} newChatOption
 */
export function networkSetCurrentChatOption(newChatOption: number): void {
	const networkSetCurrentChatOption_result = Citizen.invokeNative<void>('0x0B933C101279FCB7', newChatOption);
	return networkSetCurrentChatOption_result;
}