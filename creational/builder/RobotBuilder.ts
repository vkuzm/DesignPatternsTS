import Robot from "./Robot";

interface RobotBuilder {
    buildRobotHead(): void;
    buildRobotTorso(): void;
    buildRobotArms(): void;
    buildRobotLegs(): void;
    getRobot(): Robot;
}

export default RobotBuilder;