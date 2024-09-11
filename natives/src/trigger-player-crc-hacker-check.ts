import { PlayerIndex, EHashableSystem } from '@ivanzaida/structures'

/**
 * NETWORK:TRIGGER_PLAYER_CRC_HACKER_CHECK
 *
 * -

 * Triggers network checksum comparison between two players. When triggered, player A asks player B what's the crc of system&subsystem
 * (for instance of CItemInfo->WEAPON_APPISTOL). Player B will reply with a runtime specific crc, and player A will compare it against his own calculation.
 * If they differ, a CRC_COMPROMISED code telemetry event is sent to R, identifying players A and B and what system&subsystem pair was compared.
 * Please refer to HASHABLE_SYSTEM script enum to see what values subsystem may have for each system.
 * Returns TRUE if the crc comparison network event was correctly sent. Hashing and comparison happens async in code.
 * p1 = 6
 * 
 * ------------------------------------------------------------------
 * @param {PlayerIndex} receiver
 * @param {EHashableSystem} system
 * @param {number} subsystem
 * @returns {boolean}  
 */
export function triggerPlayerCrcHackerCheck(receiver: PlayerIndex, system: EHashableSystem | number, subsystem: number): boolean {
	const triggerPlayerCrcHackerCheck_result = Citizen.invokeNative<boolean>('-', receiver, system, subsystem);
	return triggerPlayerCrcHackerCheck_result;
}