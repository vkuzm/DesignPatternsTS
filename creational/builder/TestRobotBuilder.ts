import OldRobotBuilder from "./OldRobotBuilder";
import RobotBuilder from "./RobotBuilder";
import RobotEngineer from "./RobotEngineer";
import Robot from "./Robot";
import NewRobotBuilder from "./NewRobotBuilder";

class TestRobotBuilder {
    public start(): void {
        const oldStyleRobot: RobotBuilder = new OldRobotBuilder();
        const newStyleRobot: RobotBuilder = new NewRobotBuilder();

        // Old Style Robot
        const robotEngineer: RobotEngineer = new RobotEngineer(oldStyleRobot);
        const firstRobot: Robot = robotEngineer.getRobot();
        robotEngineer.makeRobot();
        console.log(firstRobot.getRobotHead());
        console.log(firstRobot.getRobotTorso());
        console.log(firstRobot.getRobotArms());
        console.log(firstRobot.getRobotLegs());
        console.log('\n');


        // New Style Robot
        const robotEngineer2: RobotEngineer = new RobotEngineer(newStyleRobot);
        robotEngineer2.makeRobot();
        const firstNewRobot: Robot = robotEngineer2.getRobot();
        console.log(firstNewRobot.getRobotHead());
        console.log(firstNewRobot.getRobotTorso());
        console.log(firstNewRobot.getRobotArms());
        console.log(firstNewRobot.getRobotLegs());
    }
}

new TestRobotBuilder().start();