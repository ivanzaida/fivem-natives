export enum EVehicleNodeProperties {
	VnpOffRoad = 1, // node has been flagged as 'off road', suitable only for 4x4 vehicles, etc
	VnpOnPlayersRoad, // node has been dynamically marked as somewhere ahead, possibly on (or near to) the player's current road
	VnpNoBigVehicles = 4, // node has been marked as not suitable for big vehicles
	VnpSwitchedOff = 8, // node is switched off for ambient population
	VnpTunnelOrInterior = 16, // node is in a tunnel or an interior
	VnpLeadsToDeadEnd = 32, // node is, or leads to, a dead end
	VnpHighway = 64, // node is marked as highway
	VnpJunction = 128, // node qualifies as junction
	VnpTrafficLight = 256, // node's special function is traffic-light
	VnpGiveWay = 512, // node's special function is give-way
	VnpWater = 1024, // node is water/boat
}