import { GamerHandle } from '@ivanzaida/structures'

/**
 * NETWORK:NETWORK_SEND_TRANSITION_GAMER_INSTRUCTION
 *
 * 0xD13EB0279D039C8B

 * 
 * ------------------------------------------------------------------
 * @param {GamerHandle} gamer [Ref]
 * @param {string} szGamerName
 * @param {number} instruction
 * @param {number} instructionParam
 * @param {boolean} broadcast
 * @returns {boolean}  
 */
export function networkSendTransitionGamerInstruction(gamer: GamerHandle /* ptr */, szGamerName: string, instruction: number, instructionParam: number, broadcast: boolean): boolean {
	const networkSendTransitionGamerInstruction_result = Citizen.invokeNative<boolean>('0xD13EB0279D039C8B', gamer.dataView, szGamerName, instruction, instructionParam, broadcast);
	return networkSendTransitionGamerInstruction_result;
}