import RobotBuilder from "./RobotBuilder";
import Robot from "./Robot";

class NewRobotBuilder implements RobotBuilder {
    private readonly robot: Robot;

    constructor() {
        this.robot = new Robot();
    }

    buildRobotHead(): void {
        this.robot.setRobotHead('New Tin Head');
    }

    buildRobotTorso(): void {
        this.robot.setRobotTorso('New Tin Torso');
    }

    buildRobotArms(): void {
        this.robot.setRobotArms('New Blowtorch Arms')
    }

    buildRobotLegs(): void {
        this.robot.setRobotLegs('New Rollar Skates');
    }

    getRobot(): Robot {
        return this.robot;
    }
}

export default NewRobotBuilder;