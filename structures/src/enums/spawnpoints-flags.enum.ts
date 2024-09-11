export enum ESpawnpointsFlags {
	SpawnpointsFlagDefault,
	SpawnpointsFlagMaySpawnInInterior, // allow spawn points to be chosen in interiors
	SpawnpointsFlagMaySpawnInExterior, // allow spawn points to be chosen in exterior (main map) locations
	SpawnpointsFlagAllowNotNetworkSpawnCandidatePolys = 4, // allow to choose polygons not marked as "network spawn candidate"
	SpawnpointsFlagAllowIsolatedPolys = 8, // allow to choose polygons marked as "isolated"
	SpawnpointsFlagAllowRoadPolys = 16, // allow to choose polygons marked as "road"
	SpawnpointsFlagOnlyPointsAgainstEdges = 32, // only return points which are against navmesh polygon edges
}