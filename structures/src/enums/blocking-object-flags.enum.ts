export enum EBlockingObjectFlags {
	BlockingObjectDefault,
	BlockingObjectWanderpath, // Blocking object will block wander paths
	BlockingObjectShortestpath, // Blocking object will block (regular) shortest-paths
	BlockingObjectFleepath = 4, // Blocking object will block flee paths
	BlockingObjectAllpaths = 7,
}