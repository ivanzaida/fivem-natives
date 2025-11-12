import { NetworkIndex } from '@ivanzaida/structures'

/**
 * NETWORK:NETWORK_ALLOW_CLONING_WHILE_IN_TUTORIAL
 *
 * 0x7280E2724C43179B

 * 
 * Allows a network object(currently only Submarine) to be cloned for other while the owner player is in a tutorial
 * This resets when the script shuts down but can be reset manually
 * 
 * 
 * ------------------------------------------------------------------
 * @param {NetworkIndex} networkId
 * @param {boolean} allow
 */
export function networkAllowCloningWhileInTutorial(networkId: NetworkIndex, allow: boolean): void {
	const networkAllowCloningWhileInTutorial_result = Citizen.invokeNative<void>('0x7280E2724C43179B', networkId, allow);
	return networkAllowCloningWhileInTutorial_result;
}