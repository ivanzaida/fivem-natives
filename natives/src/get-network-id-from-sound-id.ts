/**
 * AUDIO:GET_NETWORK_ID_FROM_SOUND_ID
 *
 * 0xFCF4655788628D0F

 * 
 * Convert from sound ID to network sound ID
 * 
 * Could this be used alongside either,
 * SET_NETWORK_ID_EXISTS_ON_ALL_MACHINES or _SET_NETWORK_ID_SYNC_TO_PLAYER to make it so other players can hear the sound while online? It'd be a bit troll-fun to be able to play the Zancudo UFO creepy sounds globally.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {number} soundId
 * @returns {number}  
 */
export function getNetworkIdFromSoundId(soundId: number): number {
	const getNetworkIdFromSoundId_result = Citizen.invokeNative<number>('0xFCF4655788628D0F', soundId);
	return getNetworkIdFromSoundId_result;
}