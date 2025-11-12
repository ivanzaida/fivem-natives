import { EActivityIsland, EJobContentCreator } from '@ivanzaida/structures'

/**
 * NETWORK:NETWORK_HOST_TRANSITION
 *
 * 0xD8DD13235608C9D0

 * 
 * p0: Unknown int
 * p1: Unknown int
 * p2: Unknown int
 * p3: Unknown int
 * p4: Unknown always 0 in decompiled scripts
 * p5: BOOL purpose unknown, both 0 and 1 are used in decompiled scripts.
 * p6: BOOL purpose unknown, both 0 and 1 are used in decompiled scripts.
 * p7: Unknown int, it's an int according to decompiled scripts, however the value is always 0 or 1.
 * p8: Unknown int, it's an int according to decompiled scripts, however the value is always 0 or 1.
 * p9: Unknown int, sometimes 0, but also 32768 or 16384 appear in decompiled scripst, maybe a flag of some sort?
 * 
 * From what I can tell it looks like it does the following:
 * Creates/hosts a new transition to another online session, using this in FiveM will result in other players being disconencted from the server/preventing them from joining. This is most likely because I entered the wrong session parameters since they're pretty much all unknown right now.
 * You also need to use `NetworkJoinTransition(Player player)` and `NetworkLaunchTransition()`.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {number} gameMode
 * @param {number} maxPlayers
 * @param {number} activityType
 * @param {number} activityID
 * @param {boolean} isPrivate
 * @param {boolean} isOpen
 * @param {boolean} fromMatchmaking
 * @param {EActivityIsland} activityIsland
 * @param {EJobContentCreator} contentCreator
 * @param {number} hostFlags
 * @returns {boolean}  
 */
export function networkHostTransition(gameMode: number, maxPlayers: number, activityType: number, activityID: number, isPrivate: boolean, isOpen: boolean, fromMatchmaking: boolean = false, activityIsland: EActivityIsland | number = 0, contentCreator: EJobContentCreator | number = 0, hostFlags: number = 0): boolean {
	const networkHostTransition_result = Citizen.invokeNative<boolean>('0xD8DD13235608C9D0', gameMode, maxPlayers, activityType, activityID, isPrivate, isOpen, fromMatchmaking, activityIsland, contentCreator, hostFlags);
	return networkHostTransition_result;
}