/**
 * CFX:GET_PLAYER_PEER_STATISTICS
 *
 * 0x9A928294

 * ```cppconst int ENET_PACKET_LOSS_SCALE = 65536;enum PeerStatistics{// PacketLoss will only update once every 10 seconds, use PacketLossEpoch if you want the time// since the last time the packet loss was updated.// the amount of packet loss the player has, needs to be scaled with PACKET_LOSS_SCALEPacketLoss = 0,// The variance in the packet lossPacketLossVariance = 1,// The time since the last packet update in ms, relative to the peers connection timePacketLossEpoch = 2,// The mean amount of time it takes for a packet to get to the client (ping)RoundTripTime = 3,// The variance in the round trip timeRoundTripTimeVariance = 4,// Despite their name, these are only updated once every 5 seconds, you can get the last time this was updated with PacketThrottleEpoch// The last recorded round trip time of a packetLastRoundTripTime = 5,// The last round trip time varianceLastRoundTripTimeVariance = 6,// The time since the last packet throttle update, relative to the peers connection timePacketThrottleEpoch = 7,};```These statistics only update once every 10 seconds.
 * 
 * ------------------------------------------------------------------
 * @param {string} playerSrc The player to get the stats of
 * @param {number} peerStatistic The statistic to get, this will error if its out of range
 * @returns {number}  See `ENetStatisticType` for what this will return.
 */
export function getPlayerPeerStatistics(playerSrc: string, peerStatistic: number): number {
	const getPlayerPeerStatistics_result = Citizen.invokeNative<number>('0x9A928294', playerSrc, peerStatistic);
	return getPlayerPeerStatistics_result;
}