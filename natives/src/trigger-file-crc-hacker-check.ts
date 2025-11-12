import { PlayerIndex } from '@ivanzaida/structures'

/**
 * NETWORK:TRIGGER_FILE_CRC_HACKER_CHECK
 *
 * -

 * 
 * Same exact behaviour as TRIGGER_PLAYER_CRC_HACKER_CHECK.
 * This is a wrapper to perform whole file hash checks passing filename string as a param.
 * Code will internally decide if this can be handled as a CRC_DATA_FILE_CONTENTS or a CRC_GENERIC_FILE_CONTENTS check, and process the string accordingly.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PlayerIndex} receiver
 * @param {string} fileToHash
 * @returns {boolean}  
 */
export function triggerFileCrcHackerCheck(receiver: PlayerIndex, fileToHash: string): boolean {
	const triggerFileCrcHackerCheck_result = Citizen.invokeNative<boolean>('-', receiver, fileToHash);
	return triggerFileCrcHackerCheck_result;
}