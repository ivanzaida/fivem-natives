import { NetworkIndex } from '@ivanzaida/structures'

/**
 * NETWORK:SET_NETWORK_ID_PASS_CONTROL_IN_TUTORIAL
 *
 * 0xD8347AAB0A3EF3A0

 * 
 * Objects with flag will be passed to other players when the players enters a tutorial session. If there are no
 * players to pass this object to, it will be hidden from the player
 * 
 * 
 * ------------------------------------------------------------------
 * @param {NetworkIndex} networkId
 * @param {boolean} passControl
 */
export function setNetworkIdPassControlInTutorial(networkId: NetworkIndex, passControl: boolean): void {
	const setNetworkIdPassControlInTutorial_result = Citizen.invokeNative<void>('0xD8347AAB0A3EF3A0', networkId, passControl);
	return setNetworkIdPassControlInTutorial_result;
}