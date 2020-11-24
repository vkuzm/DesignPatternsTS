import RobotBuilder from "./RobotBuilder";
import Robot from "./Robot";

class RobotEngineer {
    private readonly robotBuilder: RobotBuilder;

    constructor(robotBuilder: RobotBuilder) {
        this.robotBuilder = robotBuilder;
    }

    public getRobot(): Robot {
        return this.robotBuilder.getRobot();
    }

    public makeRobot(): void {
        this.robotBuilder.buildRobotHead();
        this.robotBuilder.buildRobotTorso();
        this.robotBuilder.buildRobotArms();
        this.robotBuilder.buildRobotLegs();
    }
}

export default RobotEngineer;